function minify(input) {
    return input.replace(/(\r\n|\n|\r)|(\s\s)|onclick\=\"anadir\(\)\"/gm, "")
}
