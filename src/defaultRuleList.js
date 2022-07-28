// LICENSE : MIT
"use strict";
export const defaultRuleList = [
    {
        id: 1,
        name: "textlint-rule-ja-no-abusage",
        rule: require("textlint-rule-ja-no-abusage").default,
        enable: true
    },
    {
        id: 2,
        name: "textlint-rule-max-kanji-continuous-len",
        rule: require("textlint-rule-max-kanji-continuous-len"),
        enable: true
    },
    {
        id: 3,
        name: "textlint-rule-ja-no-redundant-expression",
        rule: require("textlint-rule-ja-no-redundant-expression").default,
        enable: true
    },
    {
        id: 4,
        name: "textlint-rule-preset-jtf-style-2.1.8.算用数字",
        rule: require("textlint-rule-preset-jtf-style").rules["2.1.8.算用数字"],
        enable: true
    },
    {
        id: 5,
        name: "textlint-rule-preset-jtf-style-2.1.9.アルファベット",
        rule: require("textlint-rule-preset-jtf-style").rules["2.1.9.アルファベット"],
        enable: true
    },
    {
        id: 6,
        name: "textlint-rule-preset-jtf-style-2.1.2.漢字",
        rule: require("textlint-rule-preset-jtf-style").rules["2.1.2.漢字"],
        enable: true
    },
    {
        id: 7,
        name: "textlint-rule-preset-jtf-style-2.2.1.ひらがなと漢字の使い分け",
        rule: require("textlint-rule-preset-jtf-style").rules["2.2.1.ひらがなと漢字の使い分け"],
        enable: true
    },
    {
        id: 8,
        name: "textlint-rule-max-hiragana-continuous-len",
        rule: require("./rules/textlint-rule-max-hiragana-continuous-len").rule,
        enable: true
    },
    {
        id: 9,
        name: "textlint-rule-max-digits-chinese-combination-len",
        rule: require("./rules/textlint-rule-max-digits-chinese-combination-len").rule,
        enable: true
    },
    {
        id: 10,
        name: "textlint-rule-max-digits-four",
        rule: require("./rules/textlint-rule-max-digits-four").rule,
        enable: true
    },
    {
        id: 11,
        name: "textlint-rule-last-two-digit-zero",
        rule: require("./rules/textlint-rule-last-two-digit-zero").rule,
        enable: true
    }
];
