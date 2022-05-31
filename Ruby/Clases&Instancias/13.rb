class Aliado
    def initialize
      @energia = 500 
    end
    
    def energia
      @energia
    end
    
    def beber!
      @energia = (@energia*10)/100 + @energia
    end
    
    def atacar!(zombie, danio)
      zombie.recibir_danio!(danio)
      @energia = @energia - (@energia*5)/100
    end
    
    def ataque_masivo!(zombis)
      zombis.each { |zombi| atacar!(zombi, 20) }
      @energia = @energia/2
    end
  end