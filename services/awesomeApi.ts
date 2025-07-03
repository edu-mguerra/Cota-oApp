let baseUrl = 'https://economia.awesomeapi.com.br/json'

export const getUsd = async () => {

    try {
        let url = baseUrl + '/last/USD-BRL'
        const req = await fetch(url)
        const json = await req.json()

        if (json.USDBRL) {
            return parseFloat(json.USDBRL.ask)
        }

        return 0
    } catch (error) {
        return 0
    }
    
}

export const getEur = async () => {

    try {
        let url = baseUrl + '/last/EUR-BRL'
        const req = await fetch(url)
        const json = await req.json()

        if (json.EURBRL) {
            return parseFloat(json.EURBRL.ask)
        }

        return 0
    } catch (error) {
        return 0
    }
    
}

export const getBtc = async () => {

    try {
        let url = baseUrl + '/last/BTC-BRL'
        const req = await fetch(url)
        const json = await req.json()

        if (json.BTCBRL) {
            return parseFloat(json.BTCBRL.ask)
        }

        return 0
    } catch (error) {
        return 0
    }
    
}

export const getCad = async () => {

    try {
        let url = baseUrl + '/last/CAD-BRL'
        const req = await fetch(url)
        const json = await req.json()

        if (json.CADBRL) {
            return parseFloat(json.CADBRL.ask)
        }

        return 0
    } catch (error) {
        return 0
    }
    
}

export const getEth = async () => {

    try {
        let url = baseUrl + '/last/ETH-BRL'
        const req = await fetch(url)
        const json = await req.json()

        if (json.ETHBRL) {
            return parseFloat(json.ETHBRL.ask)
        }

        return 0
    } catch (error) {
        return 0
    }
    
}

