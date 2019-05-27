'use strict';
var saveData;
var idSubmited;
var passwordSubmited;
var idCaptcha;
var passwordCaptcha;
var sitekey = '6Lf_uaUUAAAAAKzIFvHy6o-m4n_Nl8QDtPGI1tYr';
function recaptchaInit() {
    idCaptcha = grecaptcha.render('id-submit', {
        sitekey,
        callback : idSubmited
    });
    passwordCaptcha = grecaptcha.render('password-submit', {
        sitekey,
        callback : passwordSubmited
    });
}

$(document).ready(function () {
    var debugStartScreen = 0;
    var APIUrl = 'https://7npxc1c5ll.execute-api.us-west-2.amazonaws.com/SekerSofrim/';
    // JavaScript source code
    var config = {
        messages: "getmessages",
        authentication: "getconnecteduser",
        id: "idlogin",
        password: {
            confirm: "passwordlogin",
            reset: "resetpassword"
        },
        userNotExist: "requestupdateuserdetails",
        noDetails: "requestupdateuserdetails",
        userArea: "updateuserdetails",
        manage: {
            upload: "uploadusers",
            uploadMessages:'replacemessages',
            download: "getusersreport",
            tableRow: "confirmuserdetails",
            getTableRows: "getuserdetailsconfirms"
        },
        logout: "logout"
    };

    var s = {
        body: $('body'),
        navbar: $('.navbar'),
        container: $('.container.body'),
        sections: {
            welcom: $('#welcom'),
            id: $('#id'),
            password: $('#password'),
            userNotExist: $('#userNotExist'),
            thanksForDetails: $('#thanksForDetails'),
            noDetails: $('#noDetails'),
            userArea: $('#userArea'),
            manageArea: $('#manageArea'),
            error: $('#error')
        },
        uploadFile: $('#uploadFile'),
        uploadMessagesFile: $('#uploadMessagesFile'),
        messages: $('#messages'),
        logout: $('#logout')
    };

    s.val = [
        { //0
        }, { //1
            id: s.sections.id.find('input')
        }, { //2
            password: s.sections.password.find('input')
        }, { //3
            firstName: $(s.sections.userNotExist.find('input')[0]),
            lastName: $(s.sections.userNotExist.find('input')[1]),
            pseudonym: $(s.sections.userNotExist.find('input')[2]),
            email: $(s.sections.userNotExist.find('input')[3]),
            phone: $(s.sections.userNotExist.find('input')[4]),
            tel: $(s.sections.userNotExist.find('input')[5]),
        }, { //4
        }, { //5
            firstName: $(s.sections.noDetails.find('input')[0]),
            lastName: $(s.sections.noDetails.find('input')[1]),
            pseudonym: $(s.sections.noDetails .find('input')[2]),
            email: $(s.sections.noDetails.find('input')[3]),
            phone: $(s.sections.noDetails.find('input')[4]),
            tel: $(s.sections.noDetails.find('input')[5]),
        }, { //6
        }, { //7
            download: s.sections.manageArea.find('#uploadFile'),
        }
    ]

    s.btn = [
        {//0
        }, {//1
            confirm: s.sections.id.find('button[to="confirm"]')
        }, {//2
            confirm: s.sections.password.find('button[to="confirm"]'),
            reset: s.sections.password.find('button[to="reset"]')
        }, {//3
            confirm: s.sections.userNotExist.find('button[to="confirm"]'),
            tryAgain: s.sections.userNotExist.find('button[to="tryAgain"]')
        }, {//4
        }, {//5
            confirm: s.sections.noDetails.find('button[to="confirm"]')
        }, {//6
        }, {//7
            download: $('#downloadUsers'),
            upload: $('#uploadUsers'),
            uploadMessages : $('#uploadMessages')
        }
    ]

    var p = {
        welcom: 0,
        id: 1,
        password: 2,
        userNotExist: 3,
        thanksForDetails: 4,
        noDetails: 5,
        userArea: 6,
        manageArea: 7,
        error: 8
    };

    var regex = {
        email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    };

    calcInformationModal();

    function calcInformationModal () {
        if (!localStorage.isInformationRead) {
            $('#trigger-information-modal').click()
            localStorage.isInformationRead = true
        }
    }

    function addLoaderCursor (selector) {
        $('.progress').show();
        $('.indeterminate').show();
    }

    function removeCursor(selector) {
        $('.progress').hide();
        $('.indeterminate').hide();
    }

    function ajaxReq(url, data, callbak, error) {
        addLoaderCursor('*');
        var xhr = new XMLHttpRequest();
        xhr.open('POST', APIUrl + url);
        xhr.withCredentials = true;
        xhr.addEventListener('load', function (evt) {
            removeCursor('*');
            if (evt.target.status === 200) {
                callbak(JSON.parse(evt.target.response));
            } else {
                console.error(evt.target.response);
                showError(evt.target.response);
            }
        });
        xhr.addEventListener('error', error || function (error) {
            removeCursor('*');
            console.error(error);
            showError(error);
        });
        xhr.send(JSON.stringify(data));
    }
    function showError(error){
        error = error || '';
        var errorContainer = document.getElementById('error-message');
            errorContainer.innerHTML='<h4>חלה תקלה במהלך הניווט באתר.</h4><h4>נסה שוב מאוחר יותר.</h4>';
        try{
            if (error && error.target && error.target.status === 403) {
                errorContainer.innerHTML = '<h4>הינכם גולשים , ככל הנראה, באתר מראה.</h4><h4>עיברו לכתובת <a>https://ssofrim.com</a></h4>';
            } else if(error && JSON.parse(error).errorMessage === "You don't have permissions for this action") {
                errorContainer.innerHTML = '<h4>אין לך הרשאות לביצוע הפעולה.</h4><h4>נסו להתנתק ולהיכנס מחדש. או למחוק עוגיות ולהיכנס מחדש.</h4>';
            } else if(error && JSON.parse(error).errorMessage === "You need to log on for this action") {
                errorContainer.innerHTML = '<h4>כדי לבצע פעולה זו יש להתחבר לאתר.</h4><h4>אם הדפדפן שלכם לא מאפשר עוגיות אנא אפשרו אותן כעת.</h4>';
            } else if(error && JSON.parse(error).errorMessage === "Missing final '@domain'") {
                errorContainer.innerHTML = '<h4>כתובת הדואר האלקטרוני ששמורה אצלנו איננה נכונה.</h4><h4>אנא פנה אלינו על מנת לעדכן את כתובת המייל שלך.</h4>';
            }
        } catch(e){}
        goToScreen(p.error);
    }

    var curScreen = null;

    var resolveObj = {
        area: function (res) {
            if (res.user) {
                s.logout.show('slow');

                if (res.user.isAdmin) {
                    goToScreen(p.manageArea);
                    ajaxReq(config.manage.getTableRows, null, setTable);
                } else {
                    $('#user-trigger-information-modal').show()
                    s.sections.userArea.find('h2 span b').text(res.user.firstName ? " " + res.user.firstName : "");
                    var text;
                    
                    if (res.user.award == null || res.user.award == undefined) {
                        text = 'נכון להיום, טרם התקבלו תוצאות.';
                    } else if (res.user.award == 0) {
                        text = 'לצערנו סך השאלות ספריך בשנת 2017 לא הגיע לרף המינימאלי הדרוש לקבלת זכאות לתשלומים ממשרד התרבות.';
                    } else {
                        text = 'הננו מתכבדים להודיעך כי ע"פ תוצאות סקר הסופרים המעודכן שבוצע בספריות הציבוריות לשנת 2017 מתוכנן לשלם לך סך ' + 
                        Number(res.user.award).toFixed(2) + ' ₪, לפני מע"מ.';
                        s.sections.userArea.find('#win-text').show();
                    }

                    s.sections.userArea.find('#win-text-price').text(text);

                    s.sections.userArea.find('#firstName').val(res.user.firstName);
                    s.sections.userArea.find('#lastName').val(res.user.lastName);
                    s.sections.userArea.find('#pseudonym').val(res.user.pseudonym);
                    s.sections.userArea.find('#id').val(res.user.ID);
                    s.sections.userArea.find('#password').val(res.user.password);
                    s.sections.userArea.find('#phone').val(res.user.phone);
                    s.sections.userArea.find('#tel').val(res.user.tel);
                    s.sections.userArea.find('#email').val(res.user.email);
                    initResponsiveElements();
                    goToScreen(p.userArea);
                }
            } else if (res.wrongPassword) {
                throwAlert(s.sections.password.find('h5'), 'הסיסמא שגויה. נסה שוב.');
                s.val[2].password.focus();
            } else {
                goToScreen(p.id);
            }
        }
    };

    function asInt(str) {
        return parseInt(str.replace('px', ''));
    }

    function centerizeElement(child, parent, horizontalAlign, verticlAlign, horizontalOffset, verticalOffset) {

        if (horizontalAlign) {
            var p_marginRight = asInt(parent.css('margin-right'));
            var p_marginLeft = asInt(parent.css('margin-left'));
            var c_marginRight = asInt(child.css('margin-right'));
            var c_marginLeft = asInt(child.css('margin-left'));

            child.css('left', (parent.width() + (isNaN(p_marginRight) ? 0 : p_marginRight) + (isNaN(p_marginLeft) ? 0 : p_marginLeft) -
                                child.width() - (isNaN(c_marginRight) ? 0 : c_marginRight) - (isNaN(c_marginLeft) ? 0 : c_marginLeft) + (horizontalOffset || 0)) / 2);
        }

        if (verticlAlign) {
            var p_marginTop = asInt(parent.css('margin-top'));
            var p_marginBottom = asInt(parent.css('margin-bottom'));
            var c_marginTop = asInt(child.css('margin-top'));
            var c_marginBottom = asInt(child.css('margin-bottom'));

            child.css('top', (parent.height() + (isNaN(p_marginTop) ? 0 : p_marginTop) + (isNaN(p_marginBottom) ? 0 : p_marginBottom) -
                               child.height() - (isNaN(c_marginTop) ? 0 : c_marginTop) - (isNaN(c_marginBottom) ? 0 : c_marginBottom) + (verticalOffset || 0)) / 2);
        }
    };

    function showElement(element) {
        element.css('display', 'block');

        setTimeout(function (element) {
            element.css('opacity', 1);
        }, 0, element);
    };

    function hideElement(element) {
        element.css('opacity', '');

        setTimeout(function (element) {
            element.css('display', '');
        }, 1100, element);
    };

    function getSectionByIndex(index) {
        var i = 0;

        for (var section in s.sections) {

            if (index == i++) {
                return s.sections[section];
            }
        }
    };

    function goToScreen(index, curImportant) {
        if (curScreen != null || curImportant) {
            hideElement(getSectionByIndex(curImportant || curScreen));
        }
        curScreen = index;
        showElement(getSectionByIndex(curScreen));
        if ([6, 7].indexOf(curScreen) == -1) {
            $(getSectionByIndex(curScreen).find('input')[0]).focus();
        }
    }

    function initResponsiveElements() {
        // Init body height
        s.container.css('height', window.innerHeight);

        // Centerize & hidden sections
        for (var section in s.sections) {
            centerizeElement(s.sections[section], s.container, false, true);
        }
    }

    function addZeros(num) {
        var num = num.toString();
        var len = num.length;

        for (var i = 0; i < 9 - len; i++) {
            num = 0 + num;
        }

        return num;
    }

    function throwNewPassword(hasPassword) {
        s.sections.password.find('h4')
                            .text('סיסמא חדשה נשלחה אליך ל' + hasPassword + '.')
                            .show('slow');
        s.btn[2].reset.removeClass('success');
    }

    function throwAlert(element, message, timeout) {
        element.text(message).show('slow');

        setTimeout(function () {
            element.hide('slow');
        }, timeout || 2000);
    }

    function uploadFile(fileInput) {
        fileInput.trigger('click');
    }

     function checkLength(msg) {
        msg = msg.split(' ');
        var limit = 100;
        var str = '';

        for (var i = 0, len = msg.length; i < len; i++) {
            str += msg[i] + ' ';

            if (str.length > limit) {
                str = str.replace(new RegExp(' ' + msg[i] + ' $'), '...');
                break;
            }
        }

        return str;
    }

    function loadMessages() {
        function resolve(res) {
            var msg = "";

            for (var x = 0; x < 40; x++) {
                for (var i in res) {
                    let currMsg = checkLength(res[i].text);
                    if (currMsg.trim()){
                        msg += checkLength(res[i].text) + "    |    ";
                    }
                }
            }

            var modal = $('#messagesModal .modal-body');

            for (var i in res) {
                modal.append("<div><b>" + (parseInt(i) + 1) + "</b> | " + res[i].text + "</div>");
                if (i != res.length - 1) {
                    modal.append('<br/>');
                }
            }

            s.messages.text(msg);

            s.messages.fadeIn({ duration: 10000 });

            setInterval(function () {
                var right = (asInt(s.messages.css('right')) + 1) || -(s.messages.text().length);
                s.messages.css('right', right + 1);
            }, 40);
        }

        ajaxReq(config.messages, null, resolve);
    }

    function translateSendPasswordTo(text) {
        switch (text) {
            case ('email'): return 'מייל';
            case ('sms'): return 'נייד';
            default: return text;
        }
    }

    function setTable(table) {
        var tbody = $('tbody[type="tableContent"]');

        for (var i in table) {
            tbody.append('<tr type="trTemplate">' +
                            '<td type="firstName"><input value="' + table[i].firstName + '"/></td>' +
                            '<td type="lastName"><input value="' + table[i].lastName + '"/></td>' +
                            '<td type="pseudonym"><input value="' + (table[i].pseudonym || '') + '"/></td>' +
                            '<td type="id"><input value="' + table[i].ID + '" disabled /></td>' +
                            '<td type="password"><input type="password" disabled value="0000000"/></td>' +
                            '<td type="phone"><input value="' + (table[i].phone || '') + '"/></td>' +
                            '<td type="tel"><input value="' + (table[i].tel || '') + '"/></td>' +
                            '<td type="email"><input value="' + (table[i].email || '') + '"/></td>' +
                            '<td type="save" onclick="saveData(event)"><span class="glyphicon glyphicon-saved"></span></td>' +
                         '</tr>'
                );
        }

        initResponsiveElements();

        $("td input").on("focus", function (event) {
            $(event.currentTarget).select();
        });
    };

    saveData = function(event) {
        function resolve(res) {
            if (res.isSaved) {
                var row = $('input[value="' + res.ID + '"]').parents('tr');
                row.hide('slow');
                setTimeout(row.remove, 2000);
            }
        }

        var row = $(event.currentTarget).parent();

        var data = {
            firstName: row.find('[type="firstName"] input').val(),
            lastName: row.find('[type="lastName"] input').val(),
            pseudonym: row.find('[type="pseudonym"] input').val(),
            //password: row.find('[type="password"] input').val(),
            ID: row.find('[type="id"] input').val(),
            phone: row.find('[type="phone"] input').val(),
            tel: row.find('[type="tel"] input').val(),
            email: row.find('[type="email"] input').val()
        }

        ajaxReq(config.manage.tableRow, data, resolve);
    }

    $('#saveUserAreaData').on('click', function (event) {
        function resolve(res) {
            throwAlert(s.sections.userArea.find('#msg-to-user'), 'נתוניך העדכניים נשמרו בהצלחה.');
        }

        var row = s.sections.userArea.find('tr');

        var data = {
            ID: row.find('#id').val(),
            firstName: row.find('#firstName').val(),
            lastName: row.find('#lastName').val(),
            pseudonym: row.find('#pseudonym').val(),
            password: row.find('#password').val(),
            phone: row.find('#phone').val(),
            tel: row.find('#tel').val(),
            email: row.find('#email').val()
        }

        ajaxReq(config.userArea, data, resolve);
    });

    (function () {
        initResponsiveElements();

        setTimeout(initResponsiveElements, 0);

        goToScreen(debugStartScreen || p.welcom);

        // CONFIRM - 0
        setTimeout(function () {
            ajaxReq(config.authentication, null, resolveObj.area);
        }, 2000);


        loadMessages();

        // Logout
        s.logout.on("click", function (event) {
            var resolve = function () {
                goToScreen(p.id);
                s.logout.hide();
                $('#user-trigger-information-modal').hide()
                s.sections.userArea.find('#win-text').hide();
            }

            ajaxReq(config.logout, null, resolve);
        });

        // Input auto focus
        $("input").on("focus", function (event) {
            $(event.currentTarget).select();
        });

        // Enter for confirm
        $("input").on("keyup", function (event) {
            if (event.key == 'Enter') {
                $('[index="' + curScreen + '"] button[to="confirm"]').trigger('click');
            }
        });

        // Inputs validate numeric
        $('input.id, input[type="tel"]').on("keypress", function (event) {
            if (event.key && (event.key.length === 1) && !/^[0-9]*$/gm.test(event.key)) {
                event.preventDefault();
            };
        });

        // #Id Inputs success input
        s.val[1].id.on("keyup", function () {
            if (s.val[1].id.val().length >= 3) {
                s.btn[1].confirm.addClass('success');
            } else {
                s.btn[1].confirm.removeClass('success');
            }
        });

        // #Password Inputs success input
        s.val[2].password.on("keyup", function () {
            if (s.val[2].password.val().length >= 1) {
                s.btn[2].confirm.addClass('success');
            } else {
                s.btn[2].confirm.removeClass('success');
            }
        });

        // #userNotExist Inputs success input
        s.sections.userNotExist.find('input').on("keyup", function () {
            var id = s.val[1].id.val();
            var firstName = s.val[3].firstName.val();
            var lastName = s.val[3].lastName.val();
            var pseudonym = s.val[3].pseudonym.val();
            var email = s.val[3].email.val();
            var phone = s.val[3].phone.val();
            var tel = s.val[3].tel.val();

            if (id.length >= 3 && firstName && lastName && email && (tel.length > 8 || phone.length > 8)) {
                s.btn[3].confirm.addClass('success');
            } else {
                s.btn[3].confirm.removeClass('success');
            }
        });

        // #noDetails Inputs success input
        s.sections.noDetails.find('input').on("keyup", function () {
            var id = s.val[1].id.val();
            var firstName = s.val[5].firstName.val();
            var lastName = s.val[5].lastName.val();
            var pseudonym = s.val[5].pseudonym.val();
            var email = s.val[5].email.val();
            var phone = s.val[5].phone.val();
            var tel = s.val[5].tel.val();

            if (id.length >= 3 && firstName && lastName && email && (tel.length > 8 || phone.length > 8)) {
                s.btn[5].confirm.addClass('success');
            } else {
                s.btn[5].confirm.removeClass('success');
            }
        });

        function idResponse(res) {
            var screen = p.password;

            if (res.userExist) {
                if (!res.hasPassword && !res.passwordSend) {
                    screen = p.noDetails;
                } else if (!res.hasPassword && res.passwordSend) {
                    setTimeout(throwNewPassword, 750, translateSendPasswordTo(res.sendPasswordTo));;
                    screen = p.password;
                }
            } else {
                screen = p.userNotExist;
            }

            goToScreen(screen);
        }
        
        idSubmited = function(captchaData) {
            // CONFIRM - 1
            if (s.btn[1].confirm.hasClass('success')) {
                var data = {
                    ID: addZeros(s.val[1].id.val()),
                    captchaData
                }

                ajaxReq(config.id, data, idResponse);
            } else {
                throwAlert(s.sections.id.find('h5'), 'קלט לא תקין. נסה שוב.');
                s.val[1].id.focus();
            }
        }

        s.btn[1].confirm.on('click', function () {
            grecaptcha.execute(idCaptcha);
        });
        passwordSubmited = function (captchaData) {
            if (s.btn[2].confirm.hasClass('success')) {
                var data = {
                    ID: addZeros(s.val[1].id.val()),
                    password: s.val[2].password.val(),
                    captchaData
                }

                ajaxReq(config.password.confirm, data, resolveObj.area);
            } else {
                throwAlert(s.sections.password.find('h5'), 'קלט לא תקין. נסה שוב.');
                s.val[2].password.focus();
            };
        };
        s.btn[2].confirm.on("click", function () {
            grecaptcha.execute(passwordCaptcha);
        });

        s.btn[2].reset.on("click", function () {
            function resolve(res) {
                if (res.userExist) {
                    throwNewPassword(translateSendPasswordTo(res.sendPasswordTo));
                } else {
                    showError();
                }
            }

            if (s.btn[2].reset.hasClass('success')) {
                var data = {
                    ID: addZeros(s.val[1].id.val())
                }

                ajaxReq(config.password.reset, data, resolve);
            } else {
                throwAlert(s.sections.password.find('h5'), 'לא ניתן לאפס את הסיסמא.');
                s.val[2].password.focus();
            };
        });

        s.btn[3].tryAgain.on('click', function () {
            goToScreen(p.id);
        });

        s.btn[3].confirm.on('click', function () {
            function resolve(res) {
                if (res.isLeggalDetails) {
                    goToScreen(p.thanksForDetails);
                } else {
                    showError();
                }
            }

            if (s.btn[3].confirm.hasClass('success')) {
                var data = {
                    ID: addZeros(s.val[1].id.val()),
                    firstName: s.val[3].firstName.val(),
                    lastName: s.val[3].lastName.val(),
                    pseudonym: s.val[3].pseudonym.val(),
                    email: s.val[3].email.val(),
                    phone: s.val[3].phone.val(),
                    tel: s.val[3].tel.val(),
                }

                ajaxReq(config.userNotExist, data, resolve);
            } else {
                throwAlert(s.sections.userNotExist.find('h5'), 'קלט לא תקין. נסה שוב.');
                s.val[3].firstName.focus();
            }
        });

        s.btn[5].confirm.on('click', function () {
            function resolve(res) {
                if (res.isLeggalDetails) {
                    goToScreen(p.thanksForDetails);
                } else {
                    showError();
                }
            }

            if (s.btn[5].confirm.hasClass('success')) {
                var data = {
                    ID: addZeros(s.val[1].id.val()),
                    firstName: s.val[5].firstName.val(),
                    lastName: s.val[5].lastName.val(),
                    pseudonym: s.val[5].pseudonym.val(),
                    email: s.val[5].email.val(),
                    phone: s.val[5].phone.val(),
                    tel: s.val[5].tel.val(),
                }

                ajaxReq(config.noDetails, data, resolve);
            } else {
                throwAlert(s.sections.noDetails.find('h5'), 'קלט לא תקין. נסה שוב.');
                s.val[5].firstName.focus();
            }
        });

        s.btn[7].upload.on('click', function () {
            uploadFile(s.uploadFile);
        });
        s.btn[7].uploadMessages.on('click', function () {
            uploadFile(s.uploadMessagesFile);
        });
        s.btn[7].download.on('click', function () {
            ajaxReq(config.manage.download, null, function(res){
                json2ExcelFile(res, 'users.xlsx');
            });
        });
        s.uploadMessagesFile.on('change', function () {
            if (s.uploadMessagesFile.prop('files')[0].name.split('.').pop().toLowerCase() != 'xlsx') {
                throwAlert(s.sections.manageArea.find('h4'), 'ניתן להעלות קבצים בעלי סיומת xlsx בלבד.');
                s.uploadMessagesFile.val('');
            } else {
                var file = s.uploadMessagesFile.prop('files')[0];
                excelFile2Json(file, excelToArray, function(data){
                    var parsedData = data.map(function(arr){
                        return arr[0];
                    }).filter(function(msg){
                        return msg;
                    });
                    ajaxReq(config.manage.uploadMessages,{messages:parsedData},function (res) {
                        // if OK
                        if (res.message.toLowerCase() == 'success') {
                            throwAlert(s.sections.manageArea.find('h4'), 'הקובץ הועלה בהצלחה!');
                        } else {
                            throwAlert(s.sections.manageArea.find('h4'), 'העלאת הקובץ נכשלה.');
                        }
                        s.uploadMessagesFile.val('');
                    },
                    function () {
                        // if error
                        throwAlert(s.sections.manageArea.find('h4'), 'העלאת הקובץ נכשלה.');
                        s.uploadMessagesFile.val('');
                    });
                });
            }
        });
        
        s.val[7].download.on('change', function () {
            if (s.uploadFile.prop('files')[0].name.split('.').pop().toLowerCase() != 'xlsx') {
                throwAlert(s.sections.manageArea.find('h4'), 'ניתן להעלות קבצים בעלי סיומת xlsx בלבד.');
                s.uploadFile.val('');
            } else {
                var file = s.uploadFile.prop('files')[0];
                excelFile2Json(file, XLSX.utils.sheet_to_json, function(data){
                    ajaxReq(config.manage.upload,{users:data},function (res) {
                        // if OK
                        if (res.message.toLowerCase() == 'success') {
                            throwAlert(s.sections.manageArea.find('h4'), 'הקובץ הועלה בהצלחה!');
                        } else {
                            throwAlert(s.sections.manageArea.find('h4'), 'העלאת הקובץ נכשלה.');
                        }
                        s.uploadFile.val('');
                    },
                    function () {
                        // if error
                        throwAlert(s.sections.manageArea.find('h4'), 'העלאת הקובץ נכשלה.');
                        s.uploadFile.val('');
                    });
                });
            }
        });

        // Init responsive elements on window resize
        $(window).resize(function () {
            initResponsiveElements();
        });
        window.addEventListener('error', function(evt){
            ajaxReq('error',{err:evt.error.name + ": " + evt.error.message + "\r\n" + evt.error.stack}, function(){}, function(){});
        })
    })();
});