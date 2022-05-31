module Juegoteca
  
    @juegos = [CarlosDuty, TimbaElLeon , Metroide]
    
    def self.juegos
      @juegos
    end
    
    def self.mucha_violencia?
      @juegos.all? { |unJuego| unJuego.violento? }
    end
    
    def self.muy_dificil?
      @juegos.any? { |unJuego| unJuego.dificultad > 25 }
    end
    
  end