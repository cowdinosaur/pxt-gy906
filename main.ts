declare enum TemperatureLocation {
    Object = 0,
    Ambiant = 1,
}

/**
 * Work with the GY-906 component.
 */
//% color=190 weight=100 icon="\uf1ec" block="GY-906"
namespace gy {

    /**
     * Reads the temperature from the IR sensor MLX90614
     */
    //% blockId=mlx90614 block="temperature %loc" shim=mlx90614::temperature
    function temperature(loc: TemperatureLocation): number {
        return 0
    }

}