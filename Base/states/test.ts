
var obj = {
    prop: 'aaa',
    probC: 'You',
    
    func: function (propA, propB) {
        this.propC = 'You';

        return this._subFuct(propA, propB, this.propC);
    },
    
    
    _subFuct: function (propsA, propsB, propsC) {
        return propsA + propsB + propsC + '?';
    }
};


var result = obj.func('How', 'Are');


alert(propC);







function createShark() {
    var shark = 'bla';
    
    
    return shark;
}


createShark();