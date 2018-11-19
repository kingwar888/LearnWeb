var game = {
    data: null, RN: 4, CN: 4,//保存游戏二维数组，总行数，列数
    score:0,
    state:1,//设置游戏状态
    GAMEOVER:0,
    RUNNING:1,
    //每个属性和方法之间必须用逗号分隔！
    //对象自己的方法要使用自己的属性，必须this.
    start() {//游戏启动
        this.state=this.RUNNING;//重置游戏状态
        this.score=0;//分数清零
        //新建空数组保存在data中 
        this.data = [];
        //r从0开始，到<RN结束
        for (var r = 0; r < this.RN; r++) {
            //新建空数组保存到data中r行
            this.data[r] = [];
            //c从0开始，到<CN结束
            for (var c = 0; c < this.CN; c++) {
                //设置data中r行c列的值为0
                this.data[r][c] = 0;
            }
        }  //遍历结束
        //调用random在两个位置随机生成2或4
        this.randomNum();
        this.randomNum();
        //console.log(this.data.join("\n"));
        this.updateView();
        //键盘事件处理
        document.onkeydown = function (e) {
            //this->.前的document->game
            //alert(e.keyCode);
            switch (e.keyCode) {
                case 37://左移
                    this.moveLeft();
                    break;
                case 38://上移
                    this.moveUp();
                    break;
                case 39://右移
                    this.moveRight();
                    break;
                case 40://下移
                    this.moveDown();
                    break;

            }
        }.bind(this);
    },
    isGameOver() {//判断游戏是否结束
        for (var r = 0; r < this.RN; r++) {
            for (var c = 0; c < this.CN; c++) {//遍历date
                if (this.data[r][c] == 0) { return false; }//如果当前元素是否为0，返回flase
                else if (this.data[r][c] == this.data[r][this.RN-1]) {//否则，如果c<cn-1且当前元素等于右侧元素时
                    return false;
                }//返回flase
                else if (this.data[r][c] == this.data[this.RN-1][c]) {//否则，如果r<rn-1且当年元素等于下方元素时
                    return false;
                }//返回flase
            }
        }//遍历结束
        return true;//返回true
    },
//左移 
    moveLeft() {//左移所有行
        //为数组拍照保存在before中
        var before = String(this.data);
        for (var r = 0; r < this.RN; r++) {//r从0开始，到<RN结束
            //左移第r行
            this.moveLeftInRow(r);
            //（循环结束）
        }
        //为数组拍照保存在after中
        var after = String(this.data);
        if (before != after) {//如果before不等于after
            //随机生成数
            this.randomNum();
            if(this.isGameOver()){//如果游戏结束
            this.state=this.GAMEOVER;
        }//修改游戏状态
            //更新页面
            this.updateView();
        }
    },
    moveLeftInRow(r) {//左移第r行
        //c从0开始，到<CN-1结束，遍历r行中每个格
        for (var c = 0; c < this.CN - 1; c++) {
            //找r行c列右侧下一个不为0的位置nextc
            var nextc = this.getNextInRow(r, c);
            if (nextc == -1) {//如果nextc为-1,就退出循环
                break;
            } else//否则  
                if (this.data[r][c] == 0) {//如果c位置的值是0
                    //将nextc位置的值赋值给c列
                    this.data[r][c] = this.data[r][nextc];
                    //将nextc列的值置为0
                    this.data[r][nextc] = 0;
                    //c留在原地
                    c--;
                } else if (this.data[r][c] == this.data[r][nextc]) { //否则 如果c列的值等于nextc列的值
                    //将c列的值*2
                    this.data[r][c] *= 2;
                    this.score+=this.data[r][c];//得分
                    //将nextc列置为0  
                    this.data[r][nextc] = 0;
                }
        }
    },
    //找r行c列右侧下一个不为0的位置
    getNextInRow(r, c) {
        for (var i = c + 1; i < this.CN; i++) {//i从c+1开始，到<CN结束
            //如果i位置不是0,就返回i
            if (this.data[r][i] != 0) return i;
        }//(遍历结束)
        return -1;//返回-1

    },
//右移
    moveRight() {//右移所有行
        //为data拍照，保存在before中
        var before = String(this.data);
        for (var r = 0; r < this.RN; r++) {//遍历data中每一行.r从0开始，到<RN结束
            //右移第r行
            this.moveRightInRow(r);
        }//(遍历结束)
        //为data拍照，保存在after中
        var after = String(this.data);
        if (before != after) {//如果发生了移动
            //随机生成数
            this.randomNum();
            //更新页面
            this.updateView();
        }
    },
    moveRightInRow(r) {//右移第r行
        for (var c = this.CN - 1; c > 0; c--) {//c从CN-1开始，到>0结束，反向遍历r行中每个格
            //找r行c列左侧前一个不为0的位置prevc
            var prevc = this.getPrevInRow(r, c);
            if (prevc == -1) { break; }//如果prevc为-1,就退出循环
            else {//否则
                if (this.data[r][c] == 0) {//如果c列的值是0
                    //将prevc列的值赋值给c列
                    this.data[r][c] = this.data[r][prevc];
                    //将prevc列的值置为0
                    this.data[r][prevc] = 0
                    //c留在原地
                    c++;
                }
                else if (this.data[r][c] == this.data[r][prevc]) {//否则 如果c列的值等于prevc列的值
                    //将c列的值*2
                    this.data[r][c] *= 2;
                    this.score+=this.data[r][c];//得分
                    //将prevc列置为0
                    this.data[r][prevc] = 0;
                }
            }
        }
    },
    getPrevInRow(r, c) {//查找r行c列左侧前一个不为0的位置
        for (var i = c - 1; i >= 0; i--) {//i从c-1开始，到>=0结束，每次-1
            if (this.data[r][i] != 0)//如果data中r行i列的值不为0，就返回i
                return i;
        }//（循环结束）
        return -1;//返回-1
    },
//上移
    moveUp() {
        //为data拍照保存在before中
        var before = String(this.data);
        for (var c = 0; c < this.CN; c++) {//遍历data中每一列
            //调用moveUpInCol上移第c列
            this.moveUpInCol(c);
        }//为data拍照保存在after中
        var after = String(this.data);
        if (before != after) {//如果before不等于after
            //随机生成数
            this.randomNum();
            //更新页面
            this.updateView();
        }
    },
    moveUpInCol(c) {
        for (var r = 0; r < this.RN - 1; r++) {//r从0开始,到r<RN-1结束，r每次递增1
            //查找r行c列下方下一个不为0的位置nextr
            var nextr = this.getNextInCol(r, c);
            if (nextr == -1) {
                break;
            }//如果没找到,就退出循环
            else//否则  
                if (this.data[r][c] == 0) {//如果r位置c列的值为0
                    //将nextr位置c列的值赋值给r位置
                    this.data[r][c] = this.data[nextr][c];
                    //将nextr位置c列置为0
                    this.data[nextr][c] = 0
                    //r留在原地
                    r--;
                } else if (this.data[r][c] == this.data[nextr][c]) {//否则，如果r位置c列的值等于nextr位置的值          
                    //将r位置c列的值*2
                    this.data[r][c] *= 2;
                    this.score+=this.data[r][c];//得分
                    //将nextr位置c列的值置为0
                    this.data[nextr][c] = 0;
                }
        }
    },
    getNextInCol(r, c) {
        //循环，r+1,到<RN结束，r每次递增1
        for (var i = r + 1; i < this.RN; i++) {
            //如果r位置c列不等于0, 就返回r//i位置c列
            if (this.data[i][c] != 0)
                return i;
        }//(遍历结束)
        return -1;//返回-1
    },
//下移
    moveDown() {
        //为data拍照保存在before中
        var before = String(this.data);
        for (var c = 0; c < this.CN; c++) {//遍历data中每一列
            //调用moveDownInCol下移第c列
            this.moveDownInCol(c);
        }
        //为data拍照保存在after中
        var after = String(this.data);
        if (before != after) {//如果发生了移动
            //随机生成数
            this.randomNum();
            //更新页面
            this.updateView();
        }
    },
    moveDownInCol(c) {
        for (var r = this.RN - 1; r > 0; r--) {//r从RN-1开始，到r>0结束，r每次递减1
            //查找r位置c列上方前一个不为0的位置prevr
            var prevr = this.getPrevInCol(r, c);
            if (prevr == -1) { break } else//如果没找到,就退出循环
                //否则  
                if (this.data[r][c] == 0) {//如果r位置c列的值为0
                    //将prevr位置c列的值赋值给r位置
                    this.data[r][c] = this.data[prevr][c];
                    //将prevr位置c列置为0
                    this.data[prevr][c] = 0;
                    //r留在原地
                    r++;
                } else if (this.data[r][c] == this.data[prevr][c]) {//否则，如果r位置c列的值等于prevr位置的值
                    //将r位置c列的值*2
                    this.data[r][c] *= 2;
                    this.score+=this.data[r][c];//得分
                    //将prevr位置c列置为0
                    this.data[prevr][c] = 0;
                }
        }
    },
    getPrevInCol(r, c) {
        //循环，r-1,r到>=0结束，每次递减1
        for (var r = r - 1; r >= 0; r--) {
            if (this.data[r][c] != 0)//如果r位置c列不等于0, 就返回r
                return r;
        }//(遍历结束)
        return -1;//返回-1
    },

    randomNum() {//在一个随机位置生成2或者4
        while (true) {//反复：
            //在0—RN-1之间生成随机数r
            var r = Math.floor(Math.random() * this.RN);
            // 在0-CN-1之间生成随机数c
            var c = Math.floor(Math.random() * this.CN);
            // 如果data中r行c列的值为0
            if (this.data[r][c] == 0) {
                // 将data中r行c列赋值为：           
                // 随机生成一个小数，如果小于0.5，就取2，否则就取4
                this.data[r][c] = Math.random() < 0.5 ? 2 : 4
                break;// 退出循环
            }
        }
    },
    updateView() {//讲data中的数据更新到每个div中
        //遍历二维数组
        for (var r = 0; r < this.RN; r++) {
            for (var c = 0; c < this.CN; c++) {
                var n = this.data[r][c];
                //找到id为c rc的div
                var div = document.getElementById("c" + r + c);
                if (n != 0) {//如果n不是0
                    div.innerHTML = n;//设置div的内容为n
                    div.className = "cell n" + n//设置div的class为cell n+n
                } else {
                    div.innerHTML = "";//清除div的内容
                    div.className = "cell";//恢复div的class为cell
                }
            }
            //找到id为score的div，设置其内容为score属性
            document.getElementById("score")
                    .innerHTML=this.score;
             //找到id为gameOver的div
             var div=document.getElementById("gameOver");       
            //如果游戏状态为GAMEOVER就设置div显示
            if(this.state==this.GAMEOVER){
               // console.log("over");
                div.style.display="block";
                //找到id为final的span，设置其内容为score
                document.getElementById("final")
                        .innerHTML=this.score;
            }else{//否则设置div隐藏
                div.style.display="none";
            }        
        }
    },


}
game.start();