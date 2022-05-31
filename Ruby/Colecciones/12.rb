module Juegoteca
  
    @juegos = [CarlosDuty, TimbaElLeon , Metroide]
    
    def self.juegos
      @juegos
    end
    
    def self.juegos_violentos
      @juegos.select { |un_juego| un_juego.violento? }
    end
    
    def self.suma_dificultades
      self.juegos_violentos.sum {|unJuego| unJuego.dificultad}
    end
    
    def self.contador_violentos
      self.juegos_violentos.count
    end
    
    def self.promedio_de_violencia
      self.suma_dificultades / self.contador_violentos
    end
    
  end