//dictionary of arrow targets - "slide":[Left,Right,Top,Down]
var nav_targets = {
    //TEST
    'test'                 :['ov', 'ov',   'ov',   'ov'],

    'begin'                 :[null, 'ov',    null,   'about'],
    'about'                 :[null, null,   'begin',    null],
    'ov'                    :['begin',  null,   null,   null],
    // ALEN
    'alen_1540_1'           :[null, 'alen_1711_1',  'alen_1540_5',  'alen_1540_2'],
    'alen_1540_2'           :[null, 'alen_1692_1',  'alen_1540_1',  'alen_1540_3'],
    'alen_1540_3'           :[null, 'alen_1692_2',  'alen_1540_2',  'alen_1540_4'],
    'alen_1540_4'           :[null, 'alen_1692_3',  'alen_1540_3',  'alen_1540_5'],
    'alen_1540_5'           :[null, 'alen_1692_4',  'alen_1540_4',  'alen_1540_1'],

    'alen_1692_1'           :['alen_1540_2',    'alen_1711_2',  'alen_1692_4',    'alen_1692_2'],
    'alen_1692_2'           :['alen_1540_3',    'alen_1711_3',  'alen_1692_1',    'alen_1692_3'],
    'alen_1692_3'           :['alen_1540_4',    'alen_1711_4',  'alen_1692_2',    'alen_1692_4'],
    'alen_1692_4'           :['alen_1540_5',    'alen_1900_5',  'alen_1692_3',    'alen_1692_1'],

    'alen_1711_1'           :['alen_1540_1',    'alen_1900_1',  'alen_1711_4',  'alen_1711_2'],
    'alen_1711_2'           :['alen_1692_1',    'alen_1755_1',  'alen_1711_1',  'alen_1711_3'],
    'alen_1711_3'           :['alen_1692_2',    'alen_1900_3',  'alen_1711_2',  'alen_1711_4'],
    'alen_1711_4'           :['alen_1692_3',    'alen_1900_4',  'alen_1711_3',  'alen_1711_1'],

    'alen_1755_1'           :['alen_1711_2',    'alen_1830_1',  null, null],

    'alen_1830_1'           :['alen_1755_1',    'alen_1900_2',  null,   null],

    'alen_1900_1'           :['alen_1711_1',    null,   'alen_1900_5',  'alen_1900_2'],
    'alen_1900_2'           :['alen_1830_1',    null,   'alen_1900_1',  'alen_1900_3'],
    'alen_1900_3'           :['alen_1711_3',    null,   'alen_1900_2',  'alen_1900_4'],
    'alen_1900_4'           :['alen_1711_4',    null,   'alen_1900_3',  'alen_1900_5'],
    'alen_1900_5'           :['alen_1692_4',    null,   'alen_1900_4',  'alen_1900_1'],
    
    // LUCIE
    'LUCIE_1755_1'          :[null, null,   'LUCIE_1755_8', 'LUCIE_1755_2'],
    'LUCIE_1755_2'          :[null, 'LUCIE_1940_1', 'LUCIE_1755_1', 'LUCIE_1755_3'],
    'LUCIE_1755_3'          :[null, 'LUCIE_1940_2', 'LUCIE_1755_2', 'LUCIE_1755_4'],
    'LUCIE_1755_4'          :[null, 'LUCIE_1940_3', 'LUCIE_1755_3', 'LUCIE_1755_5'],
    'LUCIE_1755_5'          :[null, null,   'LUCIE_1755_4',    'LUCIE_1755_6'],
    'LUCIE_1755_6'          :[null, 'LUCIE_1830_1', 'LUCIE_1755_5', 'LUCIE_1755_7'],
    'LUCIE_1755_7'          :[null, 'LUCIE_1900_2', 'LUCIE_1755_6', 'LUCIE_1755_8'],
    'LUCIE_1755_8'          :[null, 'LUCIE_1900_3', 'LUCIE_1755_7', 'LUCIE_1755_1'],

    'LUCIE_1830_1'          :['LUCIE_1755_6',   'LUCIE_1900_1', null,   null],

    'LUCIE_1900_1'          :['LUCIE_1830_1',   null,  'LUCIE_1900_3',   'LUCIE_1900_2'],
    'LUCIE_1900_2'          :['LUCIE_1755_7',   null,  'LUCIE_1900_1',   'LUCIE_1900_3'],
    'LUCIE_1900_3'          :['LUCIE_1755_8',   null,  'LUCIE_1900_2',   'LUCIE_1900_1'],

    'LUCIE_1940_1'          :['LUCIE_1755_2',   null,   'LUCIE_1940_4', 'LUCIE_1940_2'],
    'LUCIE_1940_2'          :['LUCIE_1755_3',   null,   'LUCIE_1940_1', 'LUCIE_1940_3'],
    'LUCIE_1940_3'          :['LUCIE_1755_4',   null,   'LUCIE_1940_2', 'LUCIE_1940_4'],
    'LUCIE_1940_4'          :[null, null,   'LUCIE_1940_3', 'LUCIE_1940_1'],

    //MICHEL
    'Michel_0'              :[null, null,   'Michel_1755_4.0',  'Michel_1711_1.0'],
    'Michel_1711_1.0'       :[null, null,   'Michel_0', 'Michel_1755_1.1'],

    'Michel_1755_1.1'       :[null, 'Michel_1895_1.2',  'Michel_1711_1.0',  'Michel_1755_2.0'],
    'Michel_1755_2.0'       :[null, 'Michel_1830_2.1',  'Michel_1755_1.1',  'Michel_1755_4.0'],
    'Michel_1755_4.0'       :[null, 'Michel_1895_4.1',  'Michel_1755_2.0',  'Michel_0'],

    'Michel_1830_2.1'       :['Michel_1755_2.0',    'Michel_1895_2.2',  null,   null],

    'Michel_1895_1.2'       :['Michel_1755_1.1',    'Michel_1950_1.3',  'Michel_1895_4.1',  'Michel_1895_2.2'],
    'Michel_1895_2.2'       :['Michel_1830_2.1',    'Michel_1950_2.3',  'Michel_1895_1.2',  'Michel_1895_3.0'],
    'Michel_1895_3.0'       :[null, null,   'Michel_1895_2.2',  'Michel_1895_4.1'],
    'Michel_1895_4.1'       :['Michel_1755_4.0',    'Michel_1950_4.2',  'Michel_1895_3.0',    'Michel_1895_1.2'],

    'Michel_1950_1.3'       :['Michel_1895_1.2',    null,   'Michel_5.2',   'Michel_1950_2.3'],
    'Michel_1950_2.3'       :['Michel_1895_2.2',    null,   'Michel_1950_1.3',  'Michel_1950_4.2'],
    'Michel_1950_4.2'       :['Michel_1895_4.1',    null,   'Michel_1950_2.3',  'Michel_5.2'],
    'Michel_5.2'            :[null, null,   'Michel_1950_4.2',  'Michel_1950_1.3'],

    //MANUELA1
    'Manuela_1900_0'        :[null, null,    'Manuela_1900_3',   'Manuela_1900_1'],
    'Manuela_1900_1'        :[null, null,    'Manuela_1900_0',   'Manuela_1900_2'],
    'Manuela_1900_2'        :[null, null,    'Manuela_1900_1',   'Manuela_1900_3'],
    'Manuela_1900_3'        :[null, null,    'Manuela_1900_2',   'Manuela_1900_0'],

    //MANUELA2
    'Manuela_1900_4'        :[null, null,   'Manuela_1900_8',   'Manuela_1900_5'],
    'Manuela_1900_5'        :[null, null,   'Manuela_1900_4',   'Manuela_1900_6'],
    'Manuela_1900_6'        :[null, null,   'Manuela_1900_5',   'Manuela_1900_7'],
    'Manuela_1900_7'        :[null, null,   'Manuela_1900_6',   'Manuela_1900_8'],
    'Manuela_1900_8'        :[null, null,   'Manuela_1900_7',   'Manuela_1900_4'],

    //TOPS
    't-131'                 :[null, 't452', null,   null],
    't452'                  :['t-131',  't980', null,   null],
    't980'                  :['t452',   't1220',    null,   null],
    't1220'                 :['t980',   't1474',    null,   null],
    't1474'                 :['t1220',  't1540',    null,   null],
    't1540'                 :['t1474',  't1692',    null,   null],
    't1692'                 :['t1540',  't1755',    '1540-1692_p',  null],
    't1755'                 :['t1692',  't1800',    '1711-1755_0',  '1711-1755_3'],
    't1800'                 :['t1755',  't1850',    '1755-1800_0',  '1755-1800_7'],
    't1850'                 :['t1800',  't1939',    '1800-1850_0',  '1800-1850_5'],
    't1939'                 :['t1850',  't1940',    '1850-1939_0',  '1850-1939_4'],
    't1940'                 :['t1939',  null,   '1940_0',   null],
        
    '1940_0'                :[null, null,   '1940_p',   't1940'],
        
    '1850-1939_0'           :[null, null,   '1850-1939_1',  't1939'],
    '1850-1939_1'           :[null, null,   '1850-1939_2',  '1850-1939_0'],
    '1850-1939_2'           :[null, null,   '1850-1939_3',  '1850-1939_1'],
    '1850-1939_3'           :[null, null,   '1850-1939_4',  '1850-1939_2'],
    '1850-1939_4'           :[null, null,   '1850-1939_p',    '1850-1939_3'],

    '1800-1850_0'           :[null, null,   '1800-1850_1',  't1850'],
    '1800-1850_1'           :[null, null,   '1800-1850_2',  '1800-1850_0'],
    '1800-1850_2'           :[null, null,   '1800-1850_3',  '1800-1850_1'],
    '1800-1850_3'           :[null, null,   '1800-1850_4',  '1800-1850_2'],
    '1800-1850_4'           :[null, null,   '1800-1850_5',  '1800-1850_3'],
    '1800-1850_5'           :[null, null,   '1800-1850_p',    '1800-1850_4'],

    '1755-1800_0'           :[null, null,   '1755-1800_1',  't1800'],
    '1755-1800_1'           :[null, null,   '1755-1800_2',  '1755-1800_0'],
    '1755-1800_2'           :[null, null,   '1755-1800_3',  '1755-1800_1'],
    '1755-1800_3'           :[null, null,   '1755-1800_4',  '1755-1800_2'],
    '1755-1800_4'           :[null, null,   '1755-1800_5',  '1755-1800_3'],
    '1755-1800_5'           :[null, null,   '1755-1800_6',  '1755-1800_4'],
    '1755-1800_6'           :[null, null,   '1755-1800_7',  '1755-1800_5'],
    '1755-1800_7'           :[null, null,   't1800',    '1755-1800_6'],

    '1711-1755_0'           :[null, null,   '1711-1755_1',  't1755'],
    '1711-1755_1'           :[null, null,   '1711-1755_2',  '1711-1755_0'],
    '1711-1755_2'           :[null, null,   '1711-1755_3',  '1711-1755_1'],
    '1711-1755_3'           :[null, null,   't1755',    '1711-1755_2'],

    '1540-1692_p'           :[null, null,   't1692',   't1692'],
    '1800-1850_p'           :[null, null,   't1850',   '1800-1850_5'],
    '1850-1939_p'           :[null, null,   't1939',   '1850-1939_4'],
    '1940_p'                :[null, null,   't1940',   '1940_0'],
}

function left(){
    var id = Reveal.getCurrentSlide().id;
    if (nav_targets[id] && nav_targets[id][0]){
        window.location.href='#/'+nav_targets[id][0];
    }
}

function right(){
    var id = Reveal.getCurrentSlide().id;
    if (nav_targets[id] && nav_targets[id][1]){
        window.location.href='#/'+nav_targets[id][1];
    }				
}

function up(){
    var id = Reveal.getCurrentSlide().id;
    if (nav_targets[id] && nav_targets[id][2]){
        window.location.href='#/'+nav_targets[id][2];
    }
}

function down(){
    var id = Reveal.getCurrentSlide().id;
    if (nav_targets[id] && nav_targets[id][3]){
        window.location.href='#/'+nav_targets[id][3];
    }
}

function render_navigation(){
    var slide = Reveal.getCurrentSlide();
    if (slide.classList.contains('processed') || slide.classList.contains('no_controls')) return;

    var s = slide.querySelector('.control_svg');
    if (!s){
        console.log('missing control element');
        return;
    }

    var page_id = slide.id;
    var nav_style = null;
    var accessible = [];

    if (page_id in nav_targets){
        accessible = nav_targets[page_id];
    }
    
    var l = document.createElementNS("http://www.w3.org/2000/svg",'text');
    var r = document.createElementNS("http://www.w3.org/2000/svg",'text');
    var d = document.createElementNS("http://www.w3.org/2000/svg",'text');
    var u = document.createElementNS("http://www.w3.org/2000/svg",'text');
    
    l.classList.add('fa');
    r.classList.add('fa');
    d.classList.add('fa');
    u.classList.add('fa');
    l.classList.add('pointer');
    r.classList.add('pointer');
    d.classList.add('pointer');
    u.classList.add('pointer');
    
    // unicode characters for fontawesome
    // left = &#xf104
    // right = &#xf105
    // up = &#xf106
    // down = &#xf107
    
    l.textContent = '\uf104';
    r.textContent = '\uf105';
    u.textContent = '\uf106';
    d.textContent = '\uf107';


    if (slide.classList.contains('po_button')){
        var a = document.createElementNS("http://www.w3.org/2000/svg",'a');
        var c = document.createElementNS("http://www.w3.org/2000/svg",'circle');
        var t1 = document.createElementNS("http://www.w3.org/2000/svg",'text');
        var t2 = document.createElementNS("http://www.w3.org/2000/svg",'text');

        t1.textContent = 'Projects';
        t2.textContent = 'Overview';

        a.setAttribute('href', '#/ov');

        c.setAttributeNS(null, 'cx', '85');
        c.setAttributeNS(null, 'cy', '160');
        c.setAttributeNS(null, 'r', '45');
        c.setAttributeNS(null, 'stroke', 'white');
        c.setAttributeNS(null, 'stroke-width', '1');
        c.setAttributeNS(null, 'fill', '#2b2929');

        t1.setAttributeNS(null, 'fill', '#ffffff');
        t1.setAttributeNS(null, 'font-size', '17');
        t1.setAttributeNS(null, 'font-family', 'Garamont');
        t1.setAttributeNS(null, 'x', '58');
        t1.setAttributeNS(null, 'y', '155');

        t2.setAttributeNS(null, 'fill', '#ffffff');
        t2.setAttributeNS(null, 'font-size', '17');
        t2.setAttributeNS(null, 'font-family', 'Garamont');
        t2.setAttributeNS(null, 'x', '52');
        t2.setAttributeNS(null, 'y', '181');

        s.appendChild(a);
        a.appendChild(c);
        a.appendChild(t1);
        a.appendChild(t2);

    }

    if (slide.classList.contains('corner_controls')){
        l.setAttributeNS(null, 'x', '50');
        l.setAttributeNS(null, 'y', '75');

        r.setAttributeNS(null, 'x', '100');
        r.setAttributeNS(null, 'y', '75');
        
        u.setAttributeNS(null, 'x', '70');
        u.setAttributeNS(null, 'y', '50');

        d.setAttributeNS(null, 'x', '70');
        d.setAttributeNS(null, 'y', '100');
    }
    else{
        l.setAttributeNS(null, 'x', '350');
        l.setAttributeNS(null, 'y', '500');

        r.setAttributeNS(null, 'x', '1850');
        r.setAttributeNS(null, 'y', '500');
        
        u.setAttributeNS(null, 'x', '1100');
        u.setAttributeNS(null, 'y', '40');

        d.setAttributeNS(null, 'x', '1100');
        d.setAttributeNS(null, 'y', '950');
    }

    l.setAttributeNS(null, 'onclick', 'left()');
    r.setAttributeNS(null, 'onclick', 'right()');
    u.setAttributeNS(null, 'onclick', 'up()');
    d.setAttributeNS(null, 'onclick', 'down()');

    if (accessible[0]) s.appendChild(l);
    if (accessible[1]) s.appendChild(r);
    if (accessible[2]) s.appendChild(u);
    if (accessible[3]) s.appendChild(d);

    slide.classList.add('processed'); 
}