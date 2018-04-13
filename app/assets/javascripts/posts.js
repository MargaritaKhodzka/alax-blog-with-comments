// $(function() {

  // $('a.load_comments').on('click', function(e){
  //   $.ajax({
  //     url: this.href,
  //     dataType: 'script'
  //   })
  //
  //   e.preventDefault()
  // })
  // $('a.load_comments').on('click', function (e) {
    // $.ajax({
    //   method: 'GET',
    //   url: this.href
    // }).done(function(response) {
    //   //get the response, its the variable data
    //   $('div.comments').append(response)
    // })

    // // requesting html
    // $.get(this.href).done(function(response) {
    //   $('div.comments').html(response)
    // })

    // //requesting json
    // $.get(this.href).done(function(json) {
    //   //clear the ol html in case there were stale comments
    //   var $ol = $('div.comments ol')
    //   $ol.html('')
    //   //iterate over each comment within json
    //   //append an li to the ol
    //   json.forEach(function(comment){
    //     // with each comment data, append an LI to the OL with the comment content
    //     $ol.append("<li>" + comment.content + "</li>");
    //   })
    // })
    // e.preventDefault()
  // })
// })

// //submit comment via ajax (soon to be replaced by remote true)
// $(function() {
//   $('#new_comment').on('submit', function(e) {
//     url = this.action
//     data = {
//       'authenticity_token': $("input[name='authenticity_token']").val(),
//       'comment': {
//         'content': $('#comment_content').val()
//       }
//     }
//
//     $.ajax({
//       type: 'POST',
//       url: url,
//       data: data,
//       success: function(response) {
//         $('#comment_content').val('')
//         var $ol = $('div.comments ol')
//         $ol.append(response)
//       }
//     })
//     e.preventDefault()
//   })
// })
