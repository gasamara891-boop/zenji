jQuery(document).ready(function ($) {
    $('#compareCoins').on('click', function () {
        var coin1 = $('#coin1').val();
        var coin2 = $('#coin2').val();

        if (!coin1 || !coin2 || coin1 === coin2) {
            $('#ccp-result').html('<p style="color:red;">Please select two different coins.</p>');
            return;
        }

        $.ajax({
            url: ccp_ajax_obj.ajax_url,
            method: 'POST',
            data: {
                action: 'ccp_compare_coins',
                nonce: ccp_ajax_obj.nonce,
                coin1: coin1,
                coin2: coin2
            },
            success: function (res) {
                $('#ccp-result').html(res);
            }
        });
    });

    // Update coin icon preview when dropdown changes
    $('.ccp-coin-select').on('change', function() {
        const iconUrl = $(this).find('option:selected').data('icon');
        const previewSelector = $(this).data('preview');

        if (iconUrl) {
            $(previewSelector).attr('src', iconUrl).show();
        } else {
            $(previewSelector).hide();
        }
    });
});

