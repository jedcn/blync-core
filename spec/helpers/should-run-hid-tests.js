if (process.env.SHOULD_RUN_HID_TESTS === 'false') {
  global.SHOULD_RUN_HID_TESTS = false;
} else {
  global.SHOULD_RUN_HID_TESTS = true;
}
