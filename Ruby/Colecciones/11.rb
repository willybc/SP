module Juegoteca
    @juegos = [CarlosDuty, TimbaElLeon , Metroide]
    
    def self.juegos
      @juegos
    end
    
    def self.juegos_violentos
      @juegos.select {|un_juego| un_juego.violento? }
    end
    
    def self.dificultad_violenta
      juegos_violentos.map {|unJuego| unJuego.dificultad} 
    end 
    
  end