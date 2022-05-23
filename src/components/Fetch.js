export const getFactorial = async (value) => {
    const result = await fetch(`http://localhost:3001/getfactorialvalue/${value}`);
    if (result.status === 200) {
        return result.json();
    } else {
        throw new Error(
            'HTTP hiba történt, státuszkód: ' + result.status
        );
        
    }
};

export const getFibonacci = async (value) => {
    const result = await fetch(`http://localhost:3001/getfibonaccivalue/${value}`);
    if (result.status === 200) {        
        return result.json();
    } else {
        throw new Error(
            'HTTP hiba történt, státuszkód: ' + result.status
        );
    }
};