require(["json", "../Script/jquery-1.8.2.min"], function (json) {
    $("#tip").show().html(json.name + "<br/>" + json.sex + "<br/>" + json.email);
});