// LICENSE : MIT
"use strict";
import { RuleHelper } from "textlint-rule-helper";
import { matchCaptureGroupAll } from "match-index";

const HiraganaRegExp = /((?:[あ-ん]{10,})+)/g;

export function rule(context, options = defaultOptions) {
    const { Syntax, RuleError, report, fixer, getSource } = context;
    const helper = new RuleHelper(context);

    return {
        [Syntax.Str](node) {
            if (helper.isChildNode(node, [Syntax.Link, Syntax.Image, Syntax.BlockQuote, Syntax.Emphasis])) {
                return;
            }
            const text = getSource(node);
            matchCaptureGroupAll(text, HiraganaRegExp).forEach(({ text, index }) => {
                // maxより長い場合はエラーとなる
                const ruleError = new RuleError(`平仮名が連続して10文字以上使われていないか`, {
                    index
                });
                report(node, ruleError);
            });
        }
    };
}
