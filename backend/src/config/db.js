import mongoose from 'mongoose'

// Connexion à MongoDB (serveur Docker "mongodb-platform")
export const connectDB = async () => {
    const uri = process.env.MONGODB_URI

    if (!uri) {
        throw new Error('MONGODB_URI est manquant : ajoutez-le dans backend/.env')
    }

    try {
        await mongoose.connect(uri)
        const {host, port, name} = mongoose.connection
        console.log(`MongoDB connecté avec succès : ${host}:${port}/${name}`)
    } catch (err) {
        console.error('Erreur de connexion à MongoDB :', err.message)
        process.exit(1)
    }

    mongoose.connection.on('disconnected', () => {
        console.warn('MongoDB déconnecté')
    })

    mongoose.connection.on('error', (err) => {
        console.error('Erreur MongoDB :', err.message)
    })
}
