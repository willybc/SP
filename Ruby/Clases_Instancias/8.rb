class Sobreviviente
    def initialize
      @energia = 1000
    end
    
    def energia
      @energia
    end
    
    def atacar! (zombi, cant_puntos)
      zombi.recibir_danio! (cant_puntos)
    end
  end
  
  juliana = Sobreviviente.new
  anastasia = Sobreviviente.new