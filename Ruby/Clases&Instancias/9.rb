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
    
    def ataque_masivo! (coleccion)
      coleccion.each {|unObjeto| self.atacar!(unObjeto, 15)}
    end
    
  end
  
  juliana = Sobreviviente.new
  anastasia = Sobreviviente.new
  
  caminantes = []
  
  20.times { caminantes.push(Zombi.new) }