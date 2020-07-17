//dictionary of arrow targets - "slide":[Left,Right,Top,Down]
var nav_targets = {
    //TEST
    'test1'                 :[null, null,   'test10',   'test2'],
    'test2'                 :[null, null,   'test1',    'test3'],
    'test3'                 :[null, null,   'test2',    'test4'],
    'test4'                 :[null, null,   'test3',    'test5'],
    'test5'                 :[null, null,   'test4',    'test6'],
    'test6'                 :[null, null,   'test5',    'test7'],
    'test7'                 :[null, null,   'test6',    'test8'],
    'test8'                 :[null, null,   'test7',    'test9'],
    'test9'                 :[null, null,   'test8',    'test10'],
    'test10'                :[null, null,   'test9',    'test1'],

    'begin'                 :[null, 'ov',    null,   'about'],
    'about'                 :[null, 'ov',   'begin',    'test1'],
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