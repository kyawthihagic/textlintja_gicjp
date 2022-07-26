// LICENSE : MIT
"use strict";
import { TOGGLE_RULE, UPDATE_RULE_LIST, ADD_RULE, EMBED_MODE } from "../actions/textlintActions";
import { UPDATE_RULE_ERRORS } from "../actions/textlintActions";
import { UPDATE_TEXT } from "../actions/textlintActions";

const _______ruleObject = {
    id: 0,
    enable: true,
    name: "",
    options: {},
    rule: Function
};

function toggleRule(rule, action) {
    if (action.id !== rule.id) {
        return rule;
    }
    return Object.assign({}, rule, {
        enable: !rule.enable
    });
}

function addRule(ruleList, ruleName, rule) {
    var rules = ruleList.slice();
    var ruleObject = {
        id: ruleName,
        enable: true,
        name: ruleName,
        rule
    };
    console.log(ruleObject);
    rules.push(ruleObject);
    return rules;
}

/*
    list: []
 */
function ruleListReducer(ruleList = [], action) {
    switch (action.type) {
        case ADD_RULE:
            return addRule(ruleList, action.ruleName, action.rule);
        case UPDATE_RULE_LIST:
            return action.rules.slice();
        case TOGGLE_RULE:
            return ruleList.map(rule => toggleRule(rule, action));
        default:
            return ruleList;
    }
}

function ruleErrorReducer(errors = [], action) {
    switch (action.type) {
        case UPDATE_RULE_ERRORS:
            return action.errors.slice();
        default:
            return errors;
    }
}

const defaultText = `# textlint-rule-ja-no-abusage
新料金プランが新たに適応される
海から陸に上がった生物が地上の環境に適応する
挿入ソートアルゴリズムは予めある程度ソートされたデータに適応する
規定を適用
法律を適用
読みづらい
今朝起きた事件に法律を適応する
入院費用に保険を適応する
この本は読みずらい
# textlint-rule-max-kanji-continuous-len
漢字連続調複雑性が高い
＃一二三四五六
一二三四五六です。一二三四五六です。
一二三四五六
一二三四五六
まず倍精度浮動小数点数とは
# textlint-rule-ja-no-redundant-expression
あいつにだけは絶対抜かれることはできない
人は1人では育つことができない
これは省略することが可能だが、省略しない。
テストを行う
これは省略することが可能だが、省略しない。
これは省略することは可能だ。
処理を行う
これは省略することが可能だが、省略しない。
# 2.1.8.算用数字
1,000円
100 + 100 = 200
*２００*円
２００円はダメ
おやつは３００円まで
# 2.1.9.アルファベット
これはABCの歌
_ＡＢＣ_
ＡＢＣ
これはＡＢＣ全角
# 2.1.2.漢字
今日は日本語の勉強をします。
度々問題が起きる。
文章を推敲する
私は聡明でありたい
# 2.2.1.ひらがなと漢字の使い分け
問題は以下のとおりです
問題は以下の通り
`;

function textReducer(text = defaultText, action) {
    switch (action.type) {
        case UPDATE_TEXT:
            return action.text;
        default:
            return text;
    }
}

const defaultMode = {
    embed: false
};

function modeReducer(mode = defaultMode, action) {
    switch (action.type) {
        case EMBED_MODE:
            return {
                embed: true
            };
        default:
            return mode;
    }
}

export default function textlintApp(state = {}, action) {
    return {
        text: textReducer(state.text, action),
        rules: ruleListReducer(state.rules, action),
        ruleErrors: ruleErrorReducer(state.ruleErrors, action),
        mode: modeReducer(state.mode, action)
    };
}
