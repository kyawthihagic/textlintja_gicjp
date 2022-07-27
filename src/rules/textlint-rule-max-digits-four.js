// LICENSE : MIT
"use strict";
import { RuleHelper } from "textlint-rule-helper";
import { matchCaptureGroupAll } from "match-index";

const RegExp = /((?:[\d]{4,})+)/g;

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
                // maxより長い場合はエラーとなる
                const ruleError = new RuleError(`4桁以上の数値の表記にコンマを用いているか`, {
                    index
                });
                report(node, ruleError);
            });
        }
    };
}
