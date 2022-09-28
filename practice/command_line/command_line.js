const COMMAND_LINE_INPUT = process.argv[2] ;

console.log(`Hey there, you entered ${COMMAND_LINE_INPUT}, through the command line`)

process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
});