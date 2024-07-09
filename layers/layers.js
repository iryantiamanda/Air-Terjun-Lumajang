var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_AdministrasiKab_Lumajang_1 = new ol.format.GeoJSON();
var features_AdministrasiKab_Lumajang_1 = format_AdministrasiKab_Lumajang_1.readFeatures(json_AdministrasiKab_Lumajang_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdministrasiKab_Lumajang_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdministrasiKab_Lumajang_1.addFeatures(features_AdministrasiKab_Lumajang_1);
var lyr_AdministrasiKab_Lumajang_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdministrasiKab_Lumajang_1, 
                style: style_AdministrasiKab_Lumajang_1,
                popuplayertitle: "Administrasi Kab_ Lumajang",
                interactive: true,
    title: 'Administrasi Kab_ Lumajang<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_0.png" /> ALUN-ALUN<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_1.png" /> ARGOSARI<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_2.png" /> ARGOYUWONO<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_3.png" /> BABAKAN<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_4.png" /> BADES<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_5.png" /> BAGO<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_6.png" /> BANDARAN<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_7.png" /> BANJARWARU<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_8.png" /> BANYUPUTIH KIDUL<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_9.png" /> BANYUPUTIH LOR<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_10.png" /> BARAT<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_11.png" /> BEDAYU<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_12.png" /> BEDAYUTALANG<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_13.png" /> BENCE<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_14.png" /> BESUK<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_15.png" /> BLUKON<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_16.png" /> BODANG<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_17.png" /> BORENG<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_18.png" /> BULUREJO<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_19.png" /> BURNO<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_20.png" /> BUWEK<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_21.png" /> CAKRU<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_22.png" /> CANDIPURO<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_23.png" /> CEPOKO<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_24.png" /> CONDRO<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_25.png" /> CURAHPETUNG<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_26.png" /> DADAPAN<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_27.png" /> DARUNGAN<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_28.png" /> DAWUAN WETAN<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_29.png" /> DAWUHAN LOR<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_30.png" /> DENOK<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_31.png" /> DOROGOWOK<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_32.png" /> DUREN<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_33.png" /> GEDANGMAS<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_34.png" /> GESANG<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_35.png" /> GONDORUSO<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_36.png" /> GRATI<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_37.png" /> GROBOGAN<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_38.png" /> GUCIALIT<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_39.png" /> GUNUNGBEKEL<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_40.png" /> GUNUNGGENI<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_41.png" /> GUNUNGTUGEL<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_42.png" /> JAMBEARUM<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_43.png" /> JAMBEKUMBU<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_44.png" /> JAMBESARI<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_45.png" /> JAMINTORO<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_46.png" /> JARIT<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_47.png" /> JATIGONO<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_48.png" /> JATIMULYO<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_49.png" /> JATIREJO<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_50.png" /> JATIROTO<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_51.png" /> JATISARI<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_52.png" /> JENGGRONG<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_53.png" /> JERUK<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_54.png" /> JOKARTO<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_55.png" /> JUGOSARI<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_56.png" /> KABUARAN<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_57.png" /> KALIBENDO<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_58.png" /> KALIBOTO KIDUL<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_59.png" /> KALIBOTO LOR<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_60.png" /> KALIDILEM<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_61.png" /> KALIPENGGUNG<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_62.png" /> KALIPEPE<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_63.png" /> KALISEMUT<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_64.png" /> KALIULING<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_65.png" /> KALIWUNGU<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_66.png" /> KANDANGAN<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_67.png" /> KANDANGTEPUS<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_68.png" /> KARANGANOM<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_69.png" /> KARANGANYAR<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_70.png" /> KARANGBENDO<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_71.png" /> KARANGLO<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_72.png" /> KARANGREJO<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_73.png" /> KARANGSARI<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_74.png" /> KEBONAGUNG<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_75.png" /> KEBONAN<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_76.png" /> KEDAWUNG<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_77.png" /> KEDUNGJAJANG<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_78.png" /> KEDUNGMORO<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_79.png" /> KEDUNGREJO<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_80.png" /> KEL. CITRODIWANGSAN<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_81.png" /> KEL. DITOTRUNAN<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_82.png" /> KEL. JOGOTRUNAN<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_83.png" /> KEL. JOGOYUDAN<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_84.png" /> KEL. KEBONSARI<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_85.png" /> KEL. ROGOTRUNAN<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_86.png" /> KEL. TOMPOKERSAN<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_87.png" /> KENONGO<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_88.png" /> KERTOSARI<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_89.png" /> KERTOWONO<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_90.png" /> KETING<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_91.png" /> KLAKAH<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_92.png" /> KLAMPOKARUM<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_93.png" /> KLANTING<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_94.png" /> KLOPOSAWIT<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_95.png" /> KRAI<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_96.png" /> KRASAK<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_97.png" /> KRATON<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_98.png" /> KUDUS<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_99.png" /> KUNIR KIDUL<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_100.png" /> KUNIR LOR<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_101.png" /> KUTORENON<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_102.png" /> LABRUK KIDUL<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_103.png" /> LABRUK LOR<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_104.png" /> LEBAKHARJO<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_105.png" /> LEDOKOMBO<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_106.png" /> LEDOKTEMPURO<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_107.png" /> LEMPENI<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_108.png" /> MADUREJO<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_109.png" /> MALASAN KULON<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_110.png" /> MALASAN WETAN<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_111.png" /> MANGUNSARI<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_112.png" /> MENINJO<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_113.png" /> MERAKAN<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_114.png" /> MLAWANG<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_115.png" /> MOJO<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_116.png" /> MOJOSARI<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_117.png" /> MUNDER<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_118.png" /> NGADAS<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_119.png" /> NGUTER<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_120.png" /> NOGOSARI<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_121.png" /> OROOROOMBO<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_122.png" /> PADANG<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_123.png" /> PADOMASAN<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_124.png" /> PAGOWAN<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_125.png" /> PAKEL<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_126.png" /> PANAWUNGAN<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_127.png" /> PANDANARUM<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_128.png" /> PANDANSARI<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_129.png" /> PANDANWANGI<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_130.png" /> PAPRINGAN<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_131.png" /> PASEBAN<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_132.png" /> PASIRIAN<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_133.png" /> PASRUJAMBE<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_134.png" /> PEDAGANGAN<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_135.png" /> PEJARAKAN<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_136.png" /> PENANGGAL<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_137.png" /> PETAHUNAN<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_138.png" /> PRONOJIWO<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_139.png" /> PULO<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_140.png" /> PUNDUNGSARI<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_141.png" /> PUROREJO<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_142.png" /> PURWOREJO<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_143.png" /> PURWOSONO<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_144.png" /> RAMBAAN<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_145.png" /> RANDUAGUNG<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_146.png" /> RANUBEDALI<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_147.png" /> RANULOGONG<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_148.png" /> RANUPAKIS<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_149.png" /> RANUWURUNG<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_150.png" /> RANUYOSO<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_151.png" /> REJING<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_152.png" /> ROJOPOLO<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_153.png" /> ROWOKANGKUNG<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_154.png" /> SALAK<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_155.png" /> SARIKEMUNING<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_156.png" /> SARIWANI<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_157.png" /> SAWARAN KULON<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_158.png" /> SAWARAN LOR<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_159.png" /> SELOKAWARAWAR<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_160.png" /> SELOKBESUKI<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_161.png" /> SELOKGONDANG<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_162.png" /> SEMEMU<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_163.png" /> SENDURO<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_164.png" /> SENTUL<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_165.png" /> SIDOMULYO<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_166.png" /> SIDOREJO<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_167.png" /> SIDORENGO<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_168.png" /> SOMBO<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_169.png" /> SONOWANGI<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_170.png" /> SRUNI<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_171.png" /> SUKOREJO<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_172.png" /> SUKOSARI<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_173.png" /> SUMBEREJO<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_174.png" /> SUMBERJATI<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_175.png" /> SUMBERMUJUR<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_176.png" /> SUMBERPETUNG<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_177.png" /> SUMBERREJO<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_178.png" /> SUMBERSARI<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_179.png" /> SUMBERSUKO<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_180.png" /> SUMBERURIP<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_181.png" /> SUMBERWERINGIN<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_182.png" /> SUMBERWULUH<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_183.png" /> SUPITURANG<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_184.png" /> TAMANAYU<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_185.png" /> TAMANSARI<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_186.png" /> TAMBAHREJO<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_187.png" /> TANGGUNG<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_188.png" /> TANJUNG<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_189.png" /> TEGALBANGSRI<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_190.png" /> TEGALCIUT<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_191.png" /> TEGALRANDU<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_192.png" /> TEGALREJO<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_193.png" /> TEGALSONO<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_194.png" /> TEKUNG<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_195.png" /> TEMPEH KIDUL<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_196.png" /> TEMPEH LOR<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_197.png" /> TEMPEH TENGAH<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_198.png" /> TEMPURREJO<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_199.png" /> TEMPURSARI<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_200.png" /> TIGASAN WETAN<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_201.png" /> TLOGOSARI<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_202.png" /> TUKUM<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_203.png" /> TUMPENG<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_204.png" /> TUNJUNG<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_205.png" /> TUNJUNGREJO<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_206.png" /> UMBUL<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_207.png" /> URANGGANTUNG<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_208.png" /> WATES KULON<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_209.png" /> WATES WETAN<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_210.png" /> WONOASRI<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_211.png" /> WONOAYU<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_212.png" /> WONOCEMPOKOAYU<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_213.png" /> WONOGRIYO<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_214.png" /> WONOKERTO<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_215.png" /> WONOREJO<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_216.png" /> WONOSARI<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_217.png" /> WOTGALIH<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_218.png" /> YOSORATI<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_219.png" /> YOSOWILANGUN KIDUL<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_220.png" /> YOSOWILANGUN LOR<br />\
    <img src="styles/legend/AdministrasiKab_Lumajang_1_221.png" /> <br />'
        });
var format_titik_lokasi_2 = new ol.format.GeoJSON();
var features_titik_lokasi_2 = format_titik_lokasi_2.readFeatures(json_titik_lokasi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_titik_lokasi_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_titik_lokasi_2.addFeatures(features_titik_lokasi_2);
var lyr_titik_lokasi_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_titik_lokasi_2, 
                style: style_titik_lokasi_2,
                popuplayertitle: "titik_lokasi",
                interactive: true,
                title: '<img src="styles/legend/titik_lokasi_2.png" /> titik_lokasi'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_AdministrasiKab_Lumajang_1.setVisible(true);lyr_titik_lokasi_2.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_AdministrasiKab_Lumajang_1,lyr_titik_lokasi_2];
lyr_AdministrasiKab_Lumajang_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'WADMKC': 'WADMKC', 'web': 'web', 'gambar': 'gambar', 'pict': 'pict', });
lyr_titik_lokasi_2.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'PopupInfo': 'PopupInfo', 'web': 'web', 'gambar': 'gambar', 'Kecamatan': 'Kecamatan', 'rating': 'rating', 'pict': 'pict', });
lyr_AdministrasiKab_Lumajang_1.set('fieldImages', {'NAMOBJ': 'TextEdit', 'WADMKC': 'TextEdit', 'web': 'TextEdit', 'gambar': 'TextEdit', 'pict': '', });
lyr_titik_lokasi_2.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'PopupInfo': 'TextEdit', 'web': 'ExternalResource', 'gambar': 'ExternalResource', 'Kecamatan': 'TextEdit', 'rating': 'TextEdit', 'pict': 'ExternalResource', });
lyr_AdministrasiKab_Lumajang_1.set('fieldLabels', {'NAMOBJ': 'no label', 'WADMKC': 'no label', 'web': 'no label', 'gambar': 'no label', 'pict': 'no label', });
lyr_titik_lokasi_2.set('fieldLabels', {'OID_': 'hidden field', 'Name': 'inline label - always visible', 'PopupInfo': 'no label', 'web': 'inline label - always visible', 'gambar': 'no label', 'Kecamatan': 'inline label - always visible', 'rating': 'inline label - always visible', 'pict': 'inline label - visible with data', });
lyr_titik_lokasi_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});