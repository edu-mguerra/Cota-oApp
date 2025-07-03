import { Image, StyleSheet, Text, View } from "react-native";
import { Button } from "../components/button";
import { useEffect, useState } from "react";
import { getBtc, getUsd } from "../services/awesomeApi";

export default function Screen() {


    const [loading, setLoading] = useState(false);
    const [currency, setCurrency] = useState<number>(0);


    const update = async () => {
        setLoading(true);
        const btc = await getBtc();
        setLoading(false);
        setCurrency(btc);
    }

    useEffect(() => {
        update()
    }, []);

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/btc.png')}
                resizeMode="contain"
                style={styles.img}
            />

            {loading &&
                <Text style={styles.h2}>Carregando...</Text>
            }

            {!loading && currency === 0 &&
                <Text style={styles.h2}>Erro ao carregar a cotação</Text>
            }

            {!loading &&
                <>
                    <Text style={styles.h2}>O Bitcoin está:</Text>
                    <Text style={styles.cvt}>
                        {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(currency)}
                    </Text>

                </>
            }



            <Button
                label="Atualizar cotação"
                onPress={update}

            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0B1c2d",
        paddingHorizontal: 20
    },
    img: {
        width: 200,
        height: 180,
        backgroundColor: 'transparent',
        borderRadius: 50,

    },
    h2: {
        color: "#ccc",
        fontSize: 24,
        marginTop: 30,
    },
    cvt: {
        color: "#FFFFFF",
        fontSize: 52,
        marginTop: 10,
        marginBottom: 50
    }
})