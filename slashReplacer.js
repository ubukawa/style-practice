const fs = require('fs');
s = fs.readFileSync('./root.json', 'utf-8');
json = JSON.parse(s);

i = 0
for ( layer in json.layers){
    json.layers[i].id = json.layers[i].id.replace("/", "(slash)");
    i ++
};

var jsonContent = JSON.stringify(json);
fs.writeFile("root-no-slash.json", jsonContent, 'utf8', function (err) {
    if (err) {
        console.log("An error occured during export.");
        return console.log(err);
    }
    console.log("JSON file has been saved.");
});
