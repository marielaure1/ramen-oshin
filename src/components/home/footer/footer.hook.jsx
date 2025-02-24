export default function useContact() {

    const horaires = [
        {
            jour: "Lundi",
            heures: "11h - 21h"
        },
        {
            jour: "Mardi",
            heures: "11h - 21h"
        },
        {
            jour: "Mercredi",
            heures: "11h - 21h"
        },
        {
            jour: "Jeudi",
            heures: "11h - 21h"
        },
        {
            jour: "Vendredi",
            heures: "11h - 21h"
        },
        {
            jour: "Samedi",
            heures: "11h - 22h"
        },
        {
            jour: "Dimanche",
            heures: "11h - 14h"
        }
    ]

    const coords = [
        {
            title: "Adresse",
            text: "18 rue de Nowhere, 75019 Paris"
        },
        {
            title: "Téléphone",
            text: "01 23 45 67 89"
        },
        {
            title: "Email",
            text: "hello@ramenoshin.com"
        }
    ]
    return { horaires, coords}
}