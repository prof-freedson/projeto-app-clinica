import { Alert, Image, Platform, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import CartaoExame from "../components/CartaoExame";

export default function Exames() {
    return (
        <View style={styles.container}>
            <Text style={{ fontWeight: 'bold', fontSize: 30, paddingTop: 30 }}>Exames</Text>
            <ScrollView style={{ height: '100%' }}>
                <CartaoExame
                    nomeExame="Hemograma Completo"
                    dataExame="27/08/2023"
                    horaExame="08:30"
                    precoExame="16,00"
                    orientaTitulo="Preparo:"
                    orientaDetalhes={"Jejum de 8 horas; \n\nChegar com 30 minutos de antecedência; \n\nLevar documento oficial com foto; \n\nMenores, virem acompanhados pelos pais ou responsável"}
                    imagem={require('../assets/images/hemo.jpg')}
                />
                <CartaoExame
                    nomeExame="Eletrocardiograma"
                    dataExame="11/09/2023"
                    horaExame="07:30"
                    precoExame="80,00"
                    orientaTitulo="Preparo:"
                    orientaDetalhes={"Trazer documento com foto, cartão do convênio e pedido médico; \n\nChegar 30 minutos antes do horário agendado; \n\nCaso tenha implante de marca–passo avisar antes do exame; \n\nNão suspender os medicamentos em uso, exceto se o médico solicitante tenha orientado a suspensão; \n\nVir de banho tomado; \n\nNão usar óleo ou creme no corpo no dia do exame; \n\nNo dia do exame, não usar blusa ou camisa justa (se possível, usar camisa larga); \n\nPara o sexo masculino se possível realizar a retirada de pelos da região torácica; \n\nPaciente menor de 17 anos (11 meses e 29 dias) é obrigatório à presença de um responsável legal para a realização do exame."}
                    imagem={require('../assets/images/eletrocardio.jpg')}
                />
                <CartaoExame
                    nomeExame="Ecocardiograma"
                    dataExame="11/09/2023"
                    horaExame="08:45"
                    precoExame="259,00"
                    orientaTitulo="Preparo:"
                    orientaDetalhes={"Trazer documento com foto, cartão do convênio, pedido médico e guia autorizada pelo convênio(quando necessário); \n\nChegar 15 minutos antes do horário agendado, após 15 minutos de atraso poderá não ser atendido; \n\nPacientes menores de 18 anos ou maiores que 65 anos deverão vir acompanhados de um responsável legal, que deverá permanecer no local até o final do exame; \n\nConferir peso e altura ANTES DE VIR FAZER O EXAME; \n\nTrazer exames cardiológicos recentes (se houver); \n\nNão é necessário jejum para esse exame."}
                    imagem={require('../assets/images/ecocardio.jpg')}
                />
                <CartaoExame
                    nomeExame="Densitometria Óssea"
                    dataExame="19/09/2023"
                    horaExame="09:30"
                    precoExame="210,00"
                    orientaTitulo="Preparo:"
                    orientaDetalhes={"É preciso suspender os comprimidos de cálcio 24 horas antes do exame; \n\nOs pacientes que realizaram exames radiológicos com contraste deverão aguardar, no mínimo, uma semana para agendar a densitometria óssea; \n\nNo dia do exame, é necessário vestir roupas que não tenham botão ou zíper para facilitar a aquisição da imagem; \n\nEsse exame não é recomendado para mulheres grávidas."}
                    imagem={require('../assets/images/densitometria.jpg')}
                />
                <CartaoExame
                    nomeExame="Ultrassom Abdomen Total"
                    dataExame="25/09/2023"
                    horaExame="14:30"
                    precoExame="159,00"
                    orientaTitulo="Preparo:"
                    orientaDetalhes={"Usar roupas adequadas que facilitarão a exposição da área a ser avaliada; \n\nTrazer exames anteriores pertinentes à região a ser avaliada; \n\nTrazer o pedido médico do exame; \n\nNo dia anterior, tomar 40 gotas de Luftal, a cada 02 horas, das 14h às 22h; \n\nJejum a partir 22h (ingerir somente água); \n\nAntes do exame, tomar 06 copos de água e não urinar, para realizar o exame é necessário estar com a bexiga cheia; \n\nNão será necessário suspensão de qualquer medicamento."}
                    imagem={require('../assets/images/ultrassom.jpg')}
                />
                <CartaoExame
                    nomeExame="Eletroencefalograma"
                    dataExame="21/09/2023"
                    horaExame="15:30"
                    precoExame="150,00"
                    orientaTitulo="Preparo:"
                    orientaDetalhes={"Tome banho utilizando xampu neutro, e não passe cremes ou condicionares; \n\nFaça a privação de sono. Além do registro em vigília, em alguns casos é importante avaliar a atividade cerebral durante a sonolência e o sono, por este motivo solicitamos aos pacientes realizarem privação do sono, conforme a seguinte orientação: durma 2 horas mais tarde que o habitual, acorde 2 horas antes que o habitual, e não durma durante o trajeto até a clínica; \n\nCaso já tenha realizado algum exame prévio de eletroencefalograma, leve os resultados anteriores; \n\nCaso faça uso de alguma medicação, leve uma lista com o nome e dose dos medicamentos. Não é necessário parar de tomar as medicações; \n\nO exame tem duração de 30 minutos a 1 horas, e após o mesmo o paciente poderá retornar às suas atividades normais. O laudo será disponibilizado em cerca de 1 semana (informe-se com a secretária sobre a retirada)."}
                    imagem={require('../assets/images/eletroencefalo.jpg')}
                />
                <CartaoExame
                    nomeExame="Ressonância Magnética Crânio"
                    dataExame="14/09/2023"
                    horaExame="13:45"
                    precoExame="599,00"
                    orientaTitulo="Preparo:"
                    orientaDetalhes={"Chegar com 30 minutos de antecedência ao horário agendado; \n\nTrazer exames anteriores; \n\nQuando houver o uso de sedação, o paciente deverá trazer um acompanhante; \n\nJejum absoluto, quando houver o uso de sedação (08 horas); \n\n\Lavar bem o cabelo antes do dia do exame; \n\nNão usar hidratante, óleo corporal e, o cabelo seco no dia do exame."}
                    imagem={require('../assets/images/ressonancia.jpg')}
                />
                <CartaoExame
                    nomeExame="Endoscopia Digestiva"
                    dataExame="02/10/2023"
                    horaExame="09:30"
                    precoExame="300,00"
                    orientaTitulo="Preparo:"
                    orientaDetalhes={"Chegar com 30 minutos de antecedência ao horário agendado; \n\nTrazer exames anteriores; \n\nÉ obrigatório a presença de um acompanhante maior de 18 anos, que possa permanecer na unidade durante a realização do exame e que seja responsável pelo transporte do paciente ao final do procedimento. Independente da recomendação de uso, ou não de sedativo. Caso contrário o exame não será realizado; \n\nPacientes que façam uso de medicamento para hipertensão, tomar com o mínimo de água possível; \n\nCaso o paciente faça uso de anticoagulante, o mesmo deverá entrar em contato com o seu médico, para que possa suspender o uso por 07 dias antes do exame; \n\nBeber bastante líquido até 00h00 (meia noite), caso realize o exame pela manhã; \n\nOptar por um jantar leve (Caldo) até 20h (Obs: no caldo não deve conter corantes, verduras e frutas de cores fortes (cenoura, beterraba, tomate, morango)."}
                    imagem={require('../assets/images/endoscopia.jpg')}
                />
            </ScrollView >
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f4f4f4'
    },
    exameImagem: {
        height: 100,
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20
    },
    botaoAlerta: {
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        backgroundColor: '#dd242c'
    },
    botaoTexto: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 16,
        fontWeight: 'bold',
        fontSize: 15,
        color: '#ffffff'

    }
})