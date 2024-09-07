function parseAndPrint(element) {
    const intValue = parseInt(element);
    const floatValue = parseFloat(element);

    console.log(`Input Element: ${element}`);
    console.log(`Parsed Integer Value: ${intValue}`);
    console.log(`Parsed Float Value: ${floatValue}`);
    console.log('-----------------------------');
}

parseAndPrint(42);
parseAndPrint("3.14");
parseAndPrint("100px");
parseAndPrint("Hello");
parseAndPrint(true);
parseAndPrint(null);
parseAndPrint(undefined);
