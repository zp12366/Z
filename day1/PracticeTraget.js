var zp = {
    name: zp,
    height: 168,
    brith: 1999,
    weight: 58,
    school: 'sanyi',
    score: null
}
zp.name;
zp['name'];
delete zp.brith;
zp.brith;
'toString' in zp;

var zp = {
    name: 'zp'

};
zp.hasOwnProperty('name');
zp.hasOwnProperty('toString');