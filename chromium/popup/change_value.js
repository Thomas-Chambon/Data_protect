/**
 * @author Thomas Chambon <chambon.thomas.pro@gmail.com>
 */

if (window.location.href.startsWith('https://consent.google') || window.location.href.startsWith('https://consent.youtube'))
    {

            /*Search customization button*/
            button_1 = document.getElementsByName("set_sc")[0];

            /*Youtube history storage button*/
            button_2 = document.getElementsByName("set_ytc")[0];

            /*Customize ads in Google search button*/
            button_3 = document.getElementsByName("set_aps")[0];

            /*Customize ads on YouTube and on the Web button*/
            button_4 = document.getElementsByName("set_apw")[0];
                        
            button_1.checked = true;
            button_2.checked = true;
            button_3.checked = true;
            button_4.checked = true;
                            
            setTimeout(function(){ document.forms[0].submit(); }, 1000);
    }