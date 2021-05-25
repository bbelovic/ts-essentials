function foo(...vals: any) {
    for (let x of vals) {
        console.log(`${x}`);
    }
}

foo("a", "b", "c", "d")