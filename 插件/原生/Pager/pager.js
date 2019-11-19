const Pager = (() => {
    return class {
        constructor({
            current = 1,
            pageSize = 10,
            total=100,
            panelNumber=5,
            container = document.body,
            className = 'pager',
            onPageChange
        }={}) {
            this.current = current;
            this.pageSize = pageSize;
            this.total = total;
            this.panelNumber = panelNumber;
            this.container = container;
            this.className = className;
            this.onPageChange = onPageChange
            this.render();
        }
        get pageNumber() {
            return Math.ceil(this.total / this.pageSize);
        }
        render() {
            this.container.innerHTML = ""; //清空
            this.dom = document.createElement('div');
            this.dom.className = this.className;

            const createSpan = (content, page) => {
                const span = document.createElement('span');
                span.innerHTML = content;
                this.dom.appendChild(span);
                if(this.current===page){
                    span.className = 'current';
                }
                span.onclick = () => {
                    this.current = page;
                    this.render();
                    (typeof this.onPageChange === 'function') && this.onPageChange(page);
                }
                return span;
            }
            // 生成首页和上一页
            if (this.current > 1) {
                createSpan('首页', 1);
                createSpan('上一页', this.current - 1);
            }

            // 中间部分
            let min = this.current - Math.floor(this.panelNumber / 2);
            min<1 && (min = 1);
            let max = min + this.panelNumber;
            max > this.pageNumber && (max = this.pageNumber);
            for(let i = min; i <= max; i++){
                createSpan(i, i);
            }
            // 生成下一页和尾页
            if (this.current < this.pageNumber) {
                createSpan('下一页', this.current + 1);
                createSpan('尾页', this.pageNumber);
            }
            this.container.appendChild(this.dom)
        }
    }
})()