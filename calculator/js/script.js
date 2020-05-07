$(document).ready(function () {
    const input = $('.input');
    let result = '';

    $('.button.numbers').click(function () {
        if (result.slice(-1) === '/'
            || result.slice(-1) === 'x'
            || result.slice(-1) === '+'
            || result.slice(-1) === '-'
            || ((input.val().slice(-1) === '0') && ($(this).val() !== '.'))) {
            input.val('');
        }
        input.val(input.val() + $(this).val());
        result += $(this).val();
    });

    $('.action-clear-all').click(function () {
        result = '';
        input.val('0');
    });

    $('.action-clear-one').click(function () {
        input.val(input.val().slice(0, -1));
        result = result.slice(0, -1);
    });

    $('.action').click(function () {
        if (result.slice(-1) !== $(this).val()) {
            result += $(this).val();
        }
    });

    $('.action-equal').click(function () {
        result = result.replace('x', '*');
        input.val(eval(result));
    })

});