const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">
    
    <div><label for="author" class="col-sm-2 control-label">Name</label>
    <input id="author" name="author" type="text" placeholder="Name"></div>
    
    <div><label for="email" class="col-sm-2 control-label">Email</label>
    <input id="email" name="email" type="text" placeholder="Email"></div>
    
    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" placeholder="Title" class="form-control"/>
      </div>
    </div>

    <div class="form-group"><label for="content" class="col-sm-2 control-label">Page Content</label>
    <div class="col-sm-10">
      <textarea rows="4" cols="50" form="usrform" placeholder="Post your content here" class="form-control"></textarea>
    </div></div>
    
    <div><label for="status" class="col-sm-2 control-label">Page Status</label><div>
   <input type="checkbox" id="status" name="status"
          unchecked>
   <label for="open">open</label>
    </div></div>

    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>
  
  </form>
`);