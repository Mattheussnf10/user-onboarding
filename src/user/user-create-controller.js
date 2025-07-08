
// funçao anonima = '() => {}' | arrow function = '=>' (funçao flexa)
// req = request <=> solicitaçao
// res = response <=> resposta
const UserCreateController = (req, res) => {
    console.log(req.body)
    res.json({ user: "user"})
}

module.exports = { UserCreateController };