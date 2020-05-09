var formElement=document.forms.INFO;
    formElement.onsubmit=validateInfoForm;

    function validateInfoForm() {

        var fioElement=formElement.elements.FIO;
        var ageElement=formElement.elements.AGE;

        var fioValue=fioElement.value;
        var ageValue=parseInt(ageElement.value.trim());

        if ( fioValue.length>30 ) {
            alert('Введите пожалуйста ФИО не длиннее 30 символов!');
            fioElement.focus();
            return false;
        }

        if ( isNaN(ageValue) ) {
            alert('Введите пожалуйста в поле возраста корректную цифру!');
            ageElement.focus();
            return false;
        }

        if ( ageValue<16 ) {
            alert('Возраст должен быть не менее 16 лет!');
            ageElement.focus();
            return false;
        }

        return true;
    }