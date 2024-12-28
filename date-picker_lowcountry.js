// Ensure the script runs only after the DOM is fully loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

function init() {
  const today = new Date();

  function updateInputs(start, end) {
    // Display dates to the user in MM/DD/YYYY
    $('#checkIn').val(start ? start.format('MM/DD/YYYY') : '');
    $('#checkOut').val(end ? end.format('MM/DD/YYYY') : '');

    // Store original YYYY-MM-DD for querying the booking system
    $('#checkIn').data('originalDate', start ? start.format('YYYY-MM-DD') : '');
    $('#checkOut').data('originalDate', end ? end.format('YYYY-MM-DD') : '');
  }

  // Date range picker for both check-in and check-out
  const options = {
    autoUpdateInput: false,
    minDate: today,
    autoApply: true,
    locale: {
      format: 'MM/DD/YYYY' // User-facing format
    },
    opens: 'right'
  };

  $('#checkIn').daterangepicker(options, function (start, end) {
    updateInputs(start, end);
  });

  // Make both inputs trigger the date range picker
  $('#checkOut').on('click', function () {
    $('#checkIn').focus();
  });

  $('#checkIn').on('click', function () {
    $(this).data('daterangepicker').show();
  });

  // Clear the inputs on initialization
  updateInputs();

  $('#customForm').submit(function (e) {
    e.preventDefault();
    const checkInOriginal = $('#checkIn').data('originalDate');
    const checkOutOriginal = $('#checkOut').data('originalDate');
    const minOccupancy = $('#minOccupancy').val();

    const params = new URLSearchParams();
    params.append('minOccupancy', minOccupancy);
    if (checkInOriginal) params.append('checkIn', checkInOriginal);
    if (checkOutOriginal) params.append('checkOut', checkOutOriginal);

    const baseUrl = 'https://lowcountrygetaway.guestybookings.com/properties?';
    const url = `${baseUrl}${params.toString()}`;
    window.open(url, '_blank');
  });
}