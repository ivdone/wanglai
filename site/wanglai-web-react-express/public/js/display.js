function deleteEntry(id) {
  $.ajax(
    { url : "/api/contact_info/" + id, 
      method : "DELETE",
      contentType: 'application/json',
      success: function(data) {
        var row = $("#" + id).remove();
      }
  })
}

function getList() {
    $.get("/api/contact_info", function(data) {
      var tbd = $("#table-body");
      for (i = 0; i < data.length; i++) {
        console.log(data[i]._id)
        tbd.append(`<tr id="${data[i]._id}">
                    <td>${data[i].name}</td>
                    <td>${data[i].tel}</td>
                    <td>${data[i].title}</td>
                    <td>${data[i].content}</td>
                    <td>
                      <button type="button" class="btn btn-info btn-sm" onclick="deleteEntry('${data[i]._id}')">
                        <span class="glyphicon glyphicon-remove"></span> 删除 
                      </button>
                    </td>
                    </tr>`);
      }
    });
}

$(document).ready(function() {
  getList();
})