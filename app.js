$(document).ready(function(){
  function getTime() {
    $('#date').html(moment().format('MMMM DD YYYY'));
    $('#time').html(moment().format('hh:mm:ss a'));
  }

  setInterval(getTime, 1000);

});

function postData(type, id, date, time, route) {
  $.post(route,
    {
      id: id,
      date: date,
      time: time,
      type: type
    },
    function(data, status) {
      $(".message").html('data posted', data);
    });
}

function sendData(type) {
  var employeeId = $('input').val();
  var date = moment().format('MMMM DD YYYY');
  var time = moment().format('hh:mm:ss a');
  postData(type, employeeId, date, time, '/postData')
  console.log(type + ' ' + employeeId + ' at ' + time + ' on ' + date );
}
