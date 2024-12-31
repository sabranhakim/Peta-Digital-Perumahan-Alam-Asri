var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_KomplekAlamAsri_1 = new ol.format.GeoJSON();
var features_KomplekAlamAsri_1 = format_KomplekAlamAsri_1.readFeatures(json_KomplekAlamAsri_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KomplekAlamAsri_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KomplekAlamAsri_1.addFeatures(features_KomplekAlamAsri_1);
var lyr_KomplekAlamAsri_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KomplekAlamAsri_1, 
                style: style_KomplekAlamAsri_1,
                popuplayertitle: "Komplek Alam Asri",
                interactive: true,
                title: '<img src="styles/legend/KomplekAlamAsri_1.png" /> Komplek Alam Asri'
            });
var format_Perumahan_2 = new ol.format.GeoJSON();
var features_Perumahan_2 = format_Perumahan_2.readFeatures(json_Perumahan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Perumahan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Perumahan_2.addFeatures(features_Perumahan_2);
var lyr_Perumahan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Perumahan_2, 
                style: style_Perumahan_2,
                popuplayertitle: "Perumahan",
                interactive: true,
                title: '<img src="styles/legend/Perumahan_2.png" /> Perumahan'
            });
var format_JalanUtama_3 = new ol.format.GeoJSON();
var features_JalanUtama_3 = format_JalanUtama_3.readFeatures(json_JalanUtama_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanUtama_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanUtama_3.addFeatures(features_JalanUtama_3);
var lyr_JalanUtama_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanUtama_3, 
                style: style_JalanUtama_3,
                popuplayertitle: "Jalan Utama",
                interactive: true,
                title: '<img src="styles/legend/JalanUtama_3.png" /> Jalan Utama'
            });
var format_Lapangan_4 = new ol.format.GeoJSON();
var features_Lapangan_4 = format_Lapangan_4.readFeatures(json_Lapangan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lapangan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lapangan_4.addFeatures(features_Lapangan_4);
var lyr_Lapangan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lapangan_4, 
                style: style_Lapangan_4,
                popuplayertitle: "Lapangan",
                interactive: true,
                title: '<img src="styles/legend/Lapangan_4.png" /> Lapangan'
            });
var format_Gym_5 = new ol.format.GeoJSON();
var features_Gym_5 = format_Gym_5.readFeatures(json_Gym_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gym_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gym_5.addFeatures(features_Gym_5);
var lyr_Gym_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gym_5, 
                style: style_Gym_5,
                popuplayertitle: "Gym",
                interactive: true,
                title: '<img src="styles/legend/Gym_5.png" /> Gym'
            });
var format_Masjid_6 = new ol.format.GeoJSON();
var features_Masjid_6 = format_Masjid_6.readFeatures(json_Masjid_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Masjid_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Masjid_6.addFeatures(features_Masjid_6);
var lyr_Masjid_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Masjid_6, 
                style: style_Masjid_6,
                popuplayertitle: "Masjid",
                interactive: true,
                title: '<img src="styles/legend/Masjid_6.png" /> Masjid'
            });
var format_Taman_7 = new ol.format.GeoJSON();
var features_Taman_7 = format_Taman_7.readFeatures(json_Taman_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Taman_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Taman_7.addFeatures(features_Taman_7);
var lyr_Taman_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Taman_7, 
                style: style_Taman_7,
                popuplayertitle: "Taman",
                interactive: true,
                title: '<img src="styles/legend/Taman_7.png" /> Taman'
            });
var format_PosSatpam_8 = new ol.format.GeoJSON();
var features_PosSatpam_8 = format_PosSatpam_8.readFeatures(json_PosSatpam_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PosSatpam_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PosSatpam_8.addFeatures(features_PosSatpam_8);
var lyr_PosSatpam_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PosSatpam_8, 
                style: style_PosSatpam_8,
                popuplayertitle: "Pos Satpam",
                interactive: true,
                title: '<img src="styles/legend/PosSatpam_8.png" /> Pos Satpam'
            });
var format_KolamIndoor_9 = new ol.format.GeoJSON();
var features_KolamIndoor_9 = format_KolamIndoor_9.readFeatures(json_KolamIndoor_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KolamIndoor_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KolamIndoor_9.addFeatures(features_KolamIndoor_9);
var lyr_KolamIndoor_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KolamIndoor_9, 
                style: style_KolamIndoor_9,
                popuplayertitle: "Kolam Indoor",
                interactive: true,
                title: '<img src="styles/legend/KolamIndoor_9.png" /> Kolam Indoor'
            });
var format_GedungSerbaguna_10 = new ol.format.GeoJSON();
var features_GedungSerbaguna_10 = format_GedungSerbaguna_10.readFeatures(json_GedungSerbaguna_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GedungSerbaguna_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GedungSerbaguna_10.addFeatures(features_GedungSerbaguna_10);
var lyr_GedungSerbaguna_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GedungSerbaguna_10, 
                style: style_GedungSerbaguna_10,
                popuplayertitle: "Gedung Serbaguna",
                interactive: true,
                title: '<img src="styles/legend/GedungSerbaguna_10.png" /> Gedung Serbaguna'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_KomplekAlamAsri_1.setVisible(true);lyr_Perumahan_2.setVisible(true);lyr_JalanUtama_3.setVisible(true);lyr_Lapangan_4.setVisible(true);lyr_Gym_5.setVisible(true);lyr_Masjid_6.setVisible(true);lyr_Taman_7.setVisible(true);lyr_PosSatpam_8.setVisible(true);lyr_KolamIndoor_9.setVisible(true);lyr_GedungSerbaguna_10.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_KomplekAlamAsri_1,lyr_Perumahan_2,lyr_JalanUtama_3,lyr_Lapangan_4,lyr_Gym_5,lyr_Masjid_6,lyr_Taman_7,lyr_PosSatpam_8,lyr_KolamIndoor_9,lyr_GedungSerbaguna_10];
lyr_KomplekAlamAsri_1.set('fieldAliases', {'id': 'id', });
lyr_Perumahan_2.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'Tipe': 'Tipe', 'status': 'status', 'Luas': 'Luas', });
lyr_JalanUtama_3.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Lapangan_4.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Gym_5.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Masjid_6.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Taman_7.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_PosSatpam_8.set('fieldAliases', {'Nama': 'Nama', });
lyr_KolamIndoor_9.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_GedungSerbaguna_10.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_KomplekAlamAsri_1.set('fieldImages', {'id': 'TextEdit', });
lyr_Perumahan_2.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'Tipe': '', 'status': '', 'Luas': '', });
lyr_JalanUtama_3.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Lapangan_4.set('fieldImages', {'id': '', 'Nama': '', });
lyr_Gym_5.set('fieldImages', {'id': '', 'Nama': '', });
lyr_Masjid_6.set('fieldImages', {'id': '', 'Nama': '', });
lyr_Taman_7.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_PosSatpam_8.set('fieldImages', {'Nama': '', });
lyr_KolamIndoor_9.set('fieldImages', {'id': '', 'Nama': '', });
lyr_GedungSerbaguna_10.set('fieldImages', {'id': '', 'Nama': '', });
lyr_KomplekAlamAsri_1.set('fieldLabels', {'id': 'no label', });
lyr_Perumahan_2.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'Tipe': 'no label', 'status': 'no label', 'Luas': 'no label', });
lyr_JalanUtama_3.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Lapangan_4.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Gym_5.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Masjid_6.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Taman_7.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_PosSatpam_8.set('fieldLabels', {'Nama': 'no label', });
lyr_KolamIndoor_9.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_GedungSerbaguna_10.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_GedungSerbaguna_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});