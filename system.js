class System {
    constructor() {
        this.a1 = Math.PI / 2;
        this.a2 = Math.PI / 2;
        this.a1v = 0;
        this.a2v = 0;
        this.l1 = 1;
        this.l2 = 1;
        this.m1 = 1;
        this.m2 = 1;
        this.x1 = null;
        this.y1 = null;
        this.x2 = null;
        this.y2 = null;
    }
    draw() {
        this.x1 = cx + (this.l1 * 100) * Math.sin(this.a1);
        this.y1 = cy + (this.l1 * 100) * Math.cos(this.a1);
        this.x2 = this.x1 + ((this.l2 * 100) * Math.sin(this.a2));
        this.y2 = this.y1 + ((this.l2 * 100) * Math.cos(this.a2));
        push();
        stroke(255);
        line(cx, cy, this.x1, this.y1);
        line(this.x1, this.y1, this.x2, this.y2);
        pop();
        push();
        fill(175, 100, 0);
        ellipse(this.x1, this.y1, this.m1 * 10, this.m1 * 10);
        pop();
        push();
        fill(200, 0, 250);
        ellipse(this.x2, this.y2, this.m2 * 10, this.m2 * 10);
        pop();
        push();
        fill(255, 255, 255);
        ellipse(cx, cy, 40, 40);
    }
    update() {
        let diff = this.a1 - this.a2;
        let a1a = sum([
            -prod([this.m2, this.l1, this.l2, this.a1v, this.a2v, sin(diff)]),
            -prod([g, this.l1, sin(this.a1), (this.m1 + this.m2)]),
            -prod([this.m2, this.l1, this.l1, this.a1v, this.a2v, sin(diff), cos(diff)]),
            prod([this.m2, g, this.l1, sin(this.a2), cos(diff)]),
            -prod([this.m2, this.l1, this.l1, this.a1v, sin(diff), cos(diff), (this.a1v - this.a2v)]),
            prod([this.m2, this.l1, this.l2, this.a2v, sin(diff), (this.a1v - this.a2v)])
        ])
            /
            sum([
                prod([(this.m1 + this.m2), this.l1, this.l1]),
                -prod([this.l1, this.l1, this.m2, cos(diff), cos(diff)])
            ]);
        let a2a = sum([
            prod([this.m2, this.l1, this.l2, this.a1v, this.a2v, sin(diff)]),
            -prod([this.m2, g, this.l2, sin(this.a2)]),
            -prod([this.m2, this.l1, this.l2, a1a, cos(diff)]),
            prod([this.m2, this.l1, this.l2, this.a1v, sin(diff), (this.a1v - this.a2v)])
        ])
            /
            prod([this.m2, this.l2, this.l2]);
        
        this.a1v += a1a;
        this.a1 += this.a1v;
        this.a2v += a2a;
        this.a2 += this.a2v;
        
    }
}