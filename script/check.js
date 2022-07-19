function checkAnswer(key,answer){
    return answer==getAnswer(key);
}

function getQuestion(key){
    switch (key) {
        case 0:
            return "444889的平方根";
        case 1:
            return "看拼音写人名(不带声调):\n**** lian yi";
        case 2:
            return "看拼音写人名(不带声调):\n**** lu";
        case 3:
            return "看拼音写人名(不带声调):\nChen ** yao";
        case 4:
            return "看拼音写人名(不带声调):\nChen peng **";
        case 5:
            return "看拼音写人名(不带声调):\n**** peng";
        case 6:
            return "看拼音写人名(不带声调):\nChen ** zhi";
        case 7:
            return "看拼音写人名(不带声调):\nChen ** xiang";
        case 8:
            return "看拼音写人名(不带声调):\nChen ze ****";
        case 9:
            return "看拼音写人名(不带声调):\nFang ***";
        case 10:
            return "看拼音写人名(不带声调):\nFei *** xin";
        case 11:
            return "看拼音写人名(不带声调):\n*** jie";
        case 12:
            return "看拼音写人名(不带声调):\nFei **** xue";
        case 13:
            return "看拼音写人名(不带声调):\nFu wei **";
        case 14:
            return "看拼音写人名(不带声调):\nHu ****";
        case 15:
            return "看拼音写人名(不带声调):\nJiang **** fang";
        case 16:
            return "看拼音写人名(不带声调):\nLai *** hong";
        case 17:
            return "看拼音写人名(不带声调):\n** xing yun";
        case 18:
            return "看拼音写人名(不带声调):\nLi jun ***";
        case 19:
            return "看拼音写人名(不带声调):\n** xin";
        case 20:
            return "看拼音写人名(不带声调):\nLi zi ***";
        case 21:
            return "看拼音写人名(不带声调):\n*** feng";
        case 22:
            return "看拼音写人名(不带声调):\nLiu *** hui";
        case 23:
            return "看拼音写人名(不带声调):\nLiu *** yue";
        case 24:
            return "看拼音写人名(不带声调):\n*** rong";
        case 25:
            return "看拼音写人名(不带声调):\nLiu *** ye";
        case 26:
            return "看拼音写人名(不带声调):\n**** kai xin";
        case 27:
            return "看拼音写人名(不带声调):\nLong xiao **";
        case 28:
            return "看拼音写人名(不带声调):\n**** jiang fan";
        case 29:
            return "看拼音写人名(不带声调):\nPeng ge ***";
        case 30:
            return "看拼音写人名(不带声调):\n**** hao";
        case 31:
            return "看拼音写人名(不带声调):\nTan hai **";
        case 32:
            return "看拼音写人名(不带声调):\nTan *** hui";
        case 33:
            return "看拼音写人名(不带声调):\nTan *** wei";
        case 34:
            return "看拼音写人名(不带声调):\nTan qiao ***";
        case 35:
            return "看拼音写人名(不带声调):\nTan qing ***";
        case 36:
            return "看拼音写人名(不带声调):\nTan ** gang";
        case 37:
            return "看拼音写人名(不带声调):\nTan ** han";
        case 38:
            return "看拼音写人名(不带声调):\nTan *** hua";
        case 39:
            return "看拼音写人名(不带声调):\nTan *** li";
        case 40:
            return "看拼音写人名(不带声调):\nWang **** jie";
        case 41:
            return "看拼音写人名(不带声调):\n**** fei";
        case 42:
            return "看拼音写人名(不带声调):\nWang ** xin";
        case 43:
            return "看拼音写人名(不带声调):\n** xuan";
        case 44:
            return "看拼音写人名(不带声调):\nXia **** yan";
        case 45:
            return "看拼音写人名(不带声调):\nYin mei ***";
        case 46:
            return "看拼音写人名(不带声调):\nYin yi ***";
        case 47:
            return "看拼音写人名(不带声调):\nYin ** xuan";
        case 48:
            return "看拼音写人名(不带声调):\nZhong **** lin";
        case 49:
            return "看拼音写人名(不带声调):\n**** qian qian";
        case 50:
            return "看拼音写人名(不带声调):\nZhou ** qi";
        case 51:
            return "看拼音写人名(不带声调):\nZou **";
        case 52:
            return "—— How much the shirt is?\n—— It's nine fifteen.\n答案选___\n(使用大写字母)";
        case 53:
            return "看拼音写人名(不带声调):\nHuang *** yu";
        case 54:
            return "看拼音写人名(不带声调):\nZuo *** ying";
        case 55:
            return "班长的姓名";
        case 56:
            return "副班长的姓名";
        case 57:
            return "有许多外国朋友的学生会主席是";
        case 58:
            return "根据提示猜人名:\nDragon";
        case 59:
            return "根据提示猜人名:\n我回来了";
        default:
            break;
    }
}

function getAnswer(key){
    switch (key) {
        case 0:
            return "667";
        case 1:
            return "陈涟漪";
        case 2:
            return "陈璐";
        case 3:
            return "陈牧瑶";
        case 4:
            return "陈彭柯";
        case 5:
            return "陈鹏";
        case 6:
            return "陈启之";
        case 7:
            return "陈亦翔";
        case 8:
            return "陈泽康";
        case 9:
            return "方敏";
        case 10:
            return "费佳新";
        case 11:
            return "费杰";
        case 12:
            return "费玲雪";
        case 13:
            return "付玮琦";
        case 14:
            return "胡洋";
        case 15:
            return "姜蓉芳";
        case 16:
            return "赖嘉宏";
        case 17:
            return "乐幸芸";
        case 18:
            return "李君涵";
        case 19:
            return "李鑫";
        case 20:
            return "李子晗";
        case 21:
            return "刘凤";
        case 22:
            return "刘佳慧";
        case 23:
            return "刘玟玥";
        case 24:
            return "刘蓉";
        case 25:
            return "刘鑫椰";
        case 26:
            return "龙凯欣";
        case 27:
            return "龙小乐";
        case 28:
            return "宁江帆";
        case 29:
            return "彭阁友";
        case 30:
            return "彭浩";
        case 31:
            return "谭海琪";
        case 32:
            return "谭佳慧";
        case 33:
            return "谭俊威";
        case 34:
            return "谭乔智";
        case 35:
            return "谭青飞";
        case 36:
            return "谭毅刚";
        case 37:
            return "谭宇涵";
        case 38:
            return "谭志华";
        case 39:
            return "谭智立";
        case 40:
            return "王曾杰";
        case 41:
            return "王非";
        case 42:
            return "王梓欣";
        case 43:
            return "吴旋";
        case 44:
            return "夏超琰";
        case 45:
            return "尹美琳";
        case 46:
            return "尹依琳";
        case 47:
            return "尹梓轩";
        case 48:
            return "钟唐林";
        case 49:
            return "周倩倩";
        case 50:
            return "周语奇";
        case 51:
            return "邹懿";
        case 52:
            return "C";
        case 53:
            return "黄飞宇";
        case 54:
            return "左锦瑛";
        case 55:
            return "谭乔智";
        case 56:
            return "谭毅刚";
        case 57:
            return "李华";
        case 58:
            return "龙小乐";
        case 59:
            return "赖嘉宏";
        default:
            break;
    }
}