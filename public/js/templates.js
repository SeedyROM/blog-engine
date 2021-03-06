(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["body.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<!DOCTYPE html>\n<html>\n<head>\n  <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />\n  <title>BLOG ENGINE 0.0.1</title>\n  <link rel=\"stylesheet\" href=\"/stylesheets/application.css\" />\n  ";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("head"))(env, context, frame, runtime, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
output += t_1;
output += "\n</head>\n<body>\n  ";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
output += t_3;
output += "\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js\"></script>\n  <script src=\"https://cdn.jsdelivr.net/velocity/1.2.3/velocity.min.js\"></script>\n  <script src=\"/js/application.js\"></script>\n  ";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("scripts"))(env, context, frame, runtime, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
output += t_5;
output += "\n</body>\n</html>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_head(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var frame = frame.push(true);
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var frame = frame.push(true);
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_scripts(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var frame = frame.push(true);
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_head: b_head,
b_content: b_content,
b_scripts: b_scripts,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["index.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("body.html", true, "index.html", false, function(t_2,_parentTemplate) {
if(t_2) { cb(t_2); return; }
parentTemplate = _parentTemplate
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
output += t_3;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var frame = frame.push(true);
output += "\n<h2 class=\"title hug\">\n  ";
if(runtime.contextOrFrameLookup(context, frame, "appName")) {
output += "\n    Hello ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "appName"), env.opts.autoescape);
output += "!\n  ";
;
}
else {
output += "\n    ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "content"), env.opts.autoescape);
output += "\n  ";
;
}
output += "\n  ";
if(runtime.contextOrFrameLookup(context, frame, "user")) {
output += "\n    <div class=\"username\">Signed in as ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "user")),"username"), env.opts.autoescape);
output += "</div>\n    <div class=\"logout\">\n      <a style=\"color: #AAA;\" href=\"/logout\">Logout</a>\n    </div>\n  ";
;
}
else {
output += "\n  <div class=\"login\">\n    <a style=\"color: #AAA;\" href=\"/login\">Login</a>\n  </div>\n  ";
;
}
output += "\n</h2>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_content: b_content,
root: root
};

})();
})();
