console.log("Hello World !");

var path = require('path'); 
var util = require('util'); 
var v8 = require('v8'); 
 
//Afficher le nom du fichier courant avec util.log et path.basename 
util.log( path.basename(__filename) );  
 
//Créer un chemin avec path.join puis affichage 
var dirUploads = path.join(__dirname, 'www', 'files', 'uploads');  
util.log(dirUploads); 
 
//Afficher les statistiques de l’utilisation de la mémoire avec v8. 
util.log(v8.getHeapStatistics()); 

//execution
/* Hello World !
18 Nov 20:58:08 - hello.js
18 Nov 20:58:08 - C:\Users\MARAM\Desktop\NodeJS - lab1\www\files\uploads
18 Nov 20:58:08 - {
  total_heap_size: 6438912,
  total_heap_size_executable: 524288,
  total_physical_size: 6438912,
  total_available_size: 2192938960,
  used_heap_size: 5759312,
  heap_size_limit: 2197815296,
  malloced_memory: 254072,
  peak_malloced_memory: 131216,
  does_zap_garbage: 0,
  number_of_native_contexts: 2,
  number_of_detached_contexts: 0,
  total_global_handles_size: 8192,
  used_global_handles_size: 2880,
  external_memory: 445359
} */