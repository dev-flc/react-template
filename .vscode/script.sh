#!/bin/bash

# Preguntar si se desea ejecutar la tarea
echo -e "\e[1;34m ¿Deseas ejecutar la tarea? (y/n) 👽:\e[0m"
read -p "" respuesta

# Verificar la respuesta
if [ "$respuesta" = "y" ]; then
    # Detectar el sistema operativo
    if [[ "$OSTYPE" == "linux-gnu"* ]]; then
        # Si es Linux, ejecutar npm run dev
        echo -e "\e[1;32mEjecutando en Linux 🚀 \e[0m"
        npm run dev
    elif [[ "$OSTYPE" == "msys" ]]; then
        # Si es Windows, ejecutar npm run dev:win
        echo -e "\e[1;32mEjecutando en Windows 🚀 \e[0m"
        npm run dev:win
    else
        # Si el sistema operativo no es compatible, mostrar un mensaje de error
        echo -e "\e[1;31mEl sistema operativo no es compatible 💀\e[0m"
    fi
else
    echo -e "\e[1;31mNo se ejecutó la tarea. Saliendo del script ☄️\e[0m"
fi
