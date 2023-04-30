// Show/hide password onClick of button using Javascript only
Function show() {
Var p = document.getElementById(‘pwd’);
p.setAttribute(‘type’, ‘text’);
}
Function hide() {
Var p = document.getElementById(‘pwd’);
p.setAttribute(‘type’, ‘password’);
}
Var pwShown = 0;
Document.getElementById(“eye”).addEventListener(“click”, function () {
If (pwShown == 0) {
pwShown = 1;
show();
} else {
pwShown = 0;
hide();
}
}, false);
Function funhome() {
Alert(“successfully logged in”);
}
Function formvalidation() {
Var custform = document.getElementById(“contact”);
Var custname = document.getElementById(“cn”);
Var custemail = document.getElementById(“cemail”);
Var custnum = document.getElementById(“cnum”);
Var custsub = document.getElementById(“csub”);
Var custmes = document.getElementById(“cmes”);
If (name_valid(custname, 5, 30)) {
If (email_valid(custemail)) {
If (number_valid(custnum)) {
If (subject_valid(custsub)) {
If (message_valid(custmes)) {
Confirm(“form has been submitted successfully”);
Custform.submit();
}
}
}
}
}
Document.getElementById(“contact”).reset();
}
Function name_valid(custname, min, max) {
Var nam_len = custname.value.length;
Var letter = /^[A-Za-z]+$/;
If (nam_len >= min || nam_len <= max) {
If (custname.value.match(letter)) {
Return true;
}
Else {
Alert(“name must have alphabets only and should not exceed more
Than 24”);
}
}
}
Return false;
Function email_valid(custemail) {
Var format = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-
9]{2,4})+$/;
If (custemail.value.match(format)) {
Return true;
}
Else {
Alert(“invalid email id”);
Return false;
}
}
Function number_valid(custnum) {
Var number = /^[0-9]{10}/;
If (custnum.value.match(number)) {
Return true;
}
Else {
Alert(“phone number should be of 10 numbers only”);
Return false;
}
}
Function subject_valid(custsub) {
If (custsub.value === “ “) {
Alert(“the subject should not be blank”);
Return false;
}
Else {
Return true;
}
}
Function message_valid(custmes) {
If (custmes.value === “ “) {
Alert(“the message should not be blank”);
Return false;
}
Else {
Return true;
}
}
Function paymentvalidation() {
Var payform = document.getElementById(“payment”);
Var upinum = document.getElementById(“num”);
Var password = document.getElementById(“passw”);
If (upino_valid(upinum))
{
If (password_valid(password, 6, 8))
{
Confirm(“payment done successfully!”);
Payform.submit();
}
}
Document.getElementById(“payment”).reset();
}
Function upino_valid(upinum)
{
Var number = /^\d{4}$/;
If (upinum.value.match(number))
{
Return true;
}
Else
{
Alert(“UPI number should be of limit 4”);
Return false;
}
}
Function password_valid(password, min, max)
{
Var passid_len = password.value.length;
If (passid_len == 0 || passid_len<min || passid_len>max) {
Alert(“Password should not be empty and length should be between “ +
Min+ “ to “ +max);
Return false;
}
Return true;
}