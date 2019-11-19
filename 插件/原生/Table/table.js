const Table = (() => {
    let __dataSource = [];
    return class {
        constructor(options = {}) {
            this.options = {
                ...{ //默认配置
                    columns: [], //表头
                    container: document.body, //表格外侧容器
                    className: "easy-table" //表格的类名
                },
                ...options
            }
            this.initial();
        }
        get dataSource() {
            return __dataSource;
        }
        set dataSource(value) {
            console.log(value)
            if (!Array.isArray(value)) { //传入value必须是数组
                throw new TypeError(`数据${value}必须是一个数组`);
            }
            this.tbody.innerHTML = ""; //清空表体
            for (const data of value) {
                const tr = document.createElement('tr');
                for (const col of this.options.columns) {
                    const td = document.createElement('td');
                    console.log(col)
                    if(typeof col.render === 'function'){ //存在render函数
                        console.log(col)
                        td.innerHTML = col.render(col.propName, data);
                    }else{
                        td.innerHTML = data[col.propName];
                    }
                    tr.appendChild(td);
                }
                this.tbody.appendChild(tr);
            }
        }
        /**
         * 初始化表格（生成表格，表头...）
         */
        initial() {
            // 创建表格元素
            this.tableDom = document.createElement('table');
            this.tableDom.className = this.options.className;
            // 创建表头
            const thead = document.createElement('thead');
            const th = document.createElement('tr');
            for (const item of this.options.columns) {
                const td = document.createElement('td');
                td.innerHTML = item.title;
                th.appendChild(td);
            }
            thead.appendChild(th);
            this.tableDom.appendChild(thead);
            // 创建表体
            this.tbody = document.createElement('tbody');
            this.tableDom.appendChild(this.tbody);
            // 创建表尾
            this.tfoot = document.createElement('tfoot');
            this.tableDom.appendChild(this.tfoot);
            // 插入到页面
            this.options.container.appendChild(this.tableDom);
        }

    }
})()