module Juegoteca
    @puntos = 0
    @juegos = [CarlosDuty, TimbaElLeon , Metroide]
    
    def self.juegos
      @juegos
    end
    
    def self.puntos
      @puntos
    end
    
    def self.agregar_puntos valor
      @puntos += valor
    end
    
    def self.adquirir_juego!(un_juego)
      juegos.push un_juego
      self.agregar_puntos 150
    end
    
    def self.borrar_juego!(un_juego)
      juegos.delete un_juego
    end
    
    def self.completa?
      @puntos > 1000 and juegos.size > 5
    end
    
    def self.juego_recomendable?(un_juego)
      !juegos.include? un_juego and un_juego.violento? 
    end
  end