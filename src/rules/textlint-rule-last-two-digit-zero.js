// LICENSE : MIT
"use strict";
import { RuleHelper } from "textlint-rule-helper";
import { matchCaptureGroupAll } from "match-index";

const RegExp = /([0-9][1-9][0-9]|[0-9][0-9][1-9])/g;

export function rule(context, options = defaultOptions) {
    const { Syntax, RuleError, report, fixer, getSource } = context;
    const helper = new RuleHelper(context);

    return {
        [Syntax.Str](node) {
            if (helper.isChildNode(node, [Syntax.Link, Syntax.Image, Syntax.BlockQuote, Syntax.Emphasis])) {
                return;
            }
            const text = getSource(node);
            matchCaptureGroupAll(text, RegExp).forEach(({ text, index }) => {
                const ruleError = new RuleError(`正確性が求められない場合は区切りのいい数値で紹介しているか`, {
                    index
                });
                report(node, ruleError);
            });
        }
    };
}
