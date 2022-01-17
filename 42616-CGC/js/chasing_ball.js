function fundo()
{
    var gradient = document
    .getElementById("canvas")
    .getContext("2d")
    .createLinearGradient(0, 0, 100, 200);
    gradient.addColorStop(0, "PaleTurquoise");
    gradient.addColorStop(1, "DodgerBlue");

    var edificio = document
        .getElementById("canvas")
        .getContext("2d");

    edificio.fillStyle = gradient;
    edificio.fillRect(0,0,750,400);

}

function edificio2()
{
    var edificio = document
        .getElementById("canvas")
        .getContext("2d");

    edificio.fillStyle = "Silver";
    edificio.fillRect(60,30,75,250);
    for(var j = 0; j <= 7; j++)
    {
        for(var i = 0; i <= 2; i++)
        {
            var janela = document
                .getElementById("canvas")
                .getContext("2d");

            janela.fillStyle = "Snow";
            janela.fillRect(60+10+i*10+10*i,65+j*10+10*j-24,14,10)
        }
    }
}

function edificio3()
{
    var edificio = document
        .getElementById("canvas")
        .getContext("2d");

    edificio.fillStyle = "DarkSlateGray";
    edificio.fillRect(75,170,150,90);

    var placar = document
        .getElementById("canvas")
        .getContext("2d");

    placar.fillStyle = "DarkKhaki";
    placar.fillRect(107,180,83,13);

    var janela = document
        .getElementById("canvas")
        .getContext("2d");

    janela.fillStyle = "DarkKhaki";
    janela.fillRect(84,200,95,50);

    var porta = document
        .getElementById("canvas")
        .getContext("2d");

    porta.fillStyle = "DarkKhaki";
    porta.fillRect(194,232,14,30);

    var logo = document
        .getElementById("canvas")
        .getContext("2d");
    logo.font = " 1000 10px Verdana";
    logo.fillStyle = "DarkSlateGray";
    logo.fillText("B1Gpp Store", 113, 190);
}

function edificio4()
{
    var edificio = document
        .getElementById("canvas")
        .getContext("2d");

    edificio.fillStyle = "Peru";
    edificio.fillRect(160,38,75,220);

    for(var j = 0; j <= 10; j++)
    {
        for(var i = 0; i <= 3 && j <= 7; i++)
        {
            var janela = document
                .getElementById("canvas")
                .getContext("2d");

            janela.fillStyle = "Moccasin";
            janela.fillRect(160+7+i*10+7*i,65+j*7+10*j-16,10,10)
        }
    }
}

function edificio5(pos,l,k,color1,color2)
{
    var edificio = document
        .getElementById("canvas")
        .getContext("2d");

    edificio.fillStyle = color1;
    edificio.fillRect(225+pos,60,110,300);

    for(var j = 0; j<=10; j++)
    {
        var janelaEs = document
                .getElementById("canvas")
                .getContext("2d");

            janelaEs.fillStyle = color2;
            janelaEs.fillRect(7+225+5+pos,65+j*7+10*j+5,20,10)

        var janelaDi = document
            .getElementById("canvas")
            .getContext("2d");

        janelaDi.fillStyle = color2;
        janelaDi.fillRect(49+225+5+pos,65+j*7+10*j+5,20,10)

        var janelaCen = document
            .getElementById("canvas")
            .getContext("2d");

        janelaCen.fillStyle = color2;
        janelaCen.fillRect(33+225+5+pos,65+j*7+10*j+5,10,10)

        if(j<9)
        {
            var janelaCen = document
                .getElementById("canvas")
                .getContext("2d");

            janelaCen.fillStyle = color2;
            janelaCen.fillRect(33+225+5+47+pos,65+j*7+10*j+5,10,10)
        }
        if(j === 10)
        {
            var porta = document
                    .getElementById("canvas")
                    .getContext("2d");

            porta.fillStyle = color2;
            porta.fillRect(31+225+5+47+pos+l,65+j*7+10*j-5-k,14,40)
        }
    }
}

function edificio6(pos)
{
    var edificio = document
        .getElementById("canvas")
        .getContext("2d");

    edificio.fillStyle = "peru";
    edificio.fillRect(335+pos,95,90,300);

    for(var j = 0; j <= 3; j++)
    {
        for(var i = 0; i <= 2; i++)
        {
            var janela = document
                .getElementById("canvas")
                .getContext("2d");

            janela.fillStyle = "Moccasin";
            janela.fillRect(28+240+60+10+i*20+10*i+pos,65+j*10+20*j-30+70,23,10)
        }
    }
    var janela = document
            .getElementById("canvas")
            .getContext("2d");

    janela.fillStyle = "Moccasin";
    janela.fillRect(67+240+60+10+pos,65+4*10+20*4-30+70,40,30)

    var porta = document
            .getElementById("canvas")
            .getContext("2d");

    porta.fillStyle = "Moccasin";
    porta.fillRect(37+240+60+10+pos,65+4*10+20*4-30+70+7,15,30)
}

function edificio7()
{
    var edificio = document
        .getElementById("canvas")
        .getContext("2d");

    edificio.fillStyle = "Silver";
    edificio.fillRect(425,16,110,300);

    for(var i = 0; i <= 10; i++)
    {
        var janelaEs = document
            .getElementById("canvas")
            .getContext("2d");

        janelaEs.fillStyle = "Snow";
        janelaEs.fillRect(435,26+i*10+i*10,40,10);

        var janelaDi = document
            .getElementById("canvas")
            .getContext("2d");

        janelaDi.fillStyle = "Snow";
        janelaDi.fillRect(505,26+i*10+i*10,10,10);

        if(i === 10)
        {
            var porta = document
                .getElementById("canvas")
                .getContext("2d");
            
            janelaCen.fillStyle = "Snow";
            janelaCen.fillRect(481,26+i*10+i*10.5,18,30);
            break;
        }

        var janelaCen = document
            .getElementById("canvas")
            .getContext("2d");

        janelaCen.fillStyle = "Snow";
        janelaCen.fillRect(485,26+i*10+i*10,10,10);
    }
}

function edificio8(pos)
{
    var edificio = document
        .getElementById("canvas")
        .getContext("2d");

    edificio.fillStyle = "DarkSlateGray";
    edificio.fillRect(240+60+pos,20,75,250);
    for(var j = 0; j <= 7; j++)
    {
        for(var i = 0; i <= 2; i++)
        {
            var janela = document
                .getElementById("canvas")
                .getContext("2d");

            janela.fillStyle = "DarkKhaki";
            janela.fillRect(pos+240+60+10+i*10+10*i,65+j*10+10*j-30,14,10)
        }
    }
}

function edificio9(pos)
{
    var edificio = document
        .getElementById("canvas")
        .getContext("2d");

    edificio.fillStyle = "LightSlateGrey";
    edificio.fillRect(pos,53,75,220);

    for(var j = 0; j <= 10; j++)
    {
        for(var i = 0; i <= 3 && j <= 7; i++)
        {
            var janela = document
                .getElementById("canvas")
                .getContext("2d");

            janela.fillStyle = "LightSteelBlue";
            janela.fillRect(7+i*10+7*i+pos,65+j*7+10*j,10,10)
        }
        if(j >= 8)
        {
            if(j === 10)
            {
                var porta = document
                    .getElementById("canvas")
                    .getContext("2d");

                porta.fillStyle = "LightSteelBlue";
                porta.fillRect(31+pos,65+j*7+10*j,14,25)
                break;
            }
            var janelaEs = document
                .getElementById("canvas")
                .getContext("2d");

            janelaEs.fillStyle = "LightSteelBlue";
            janelaEs.fillRect(7+pos,65+j*7+10*j,20,10)

            var janelaDi = document
                .getElementById("canvas")
                .getContext("2d");

            janelaDi.fillStyle = "LightSteelBlue";
            janelaDi.fillRect(49+pos,65+j*7+10*j,20,10)

            var janelaCen = document
                .getElementById("canvas")
                .getContext("2d");

            janelaCen.fillStyle = "LightSteelBlue";
            janelaCen.fillRect(33+pos,65+j*7+10*j,10,10)
        }
    }
}

function primeiroplano()
{
    var chao = document
        .getElementById("canvas")
        .getContext("2d");

    chao.fillStyle = "DarkSeaGreen";
    chao.fillRect(0,260,750,400);

    var passeio = document
        .getElementById("canvas")
        .getContext("2d");

    passeio.fillStyle = "darkgrey";
    passeio.fillRect(0,260,750,30);

    for(let j = 0; j < 50; j++)
    {
        for(let i = 0; i < 2000; i++)
        {
            var x = Math.random();
            var y = Math.random();

            if(i*7*x < 770 && y*295+j*10 >295)
            {

                var relva = document
                .getElementById("canvas")
                .getContext("2d");
            
                relva.beginPath();
                relva.lineWidth = 1;
                relva.moveTo(i*7*x,y*295+j*10);
                relva.lineTo(i*7*x-5,y*295+j*10-7);
                relva.strokeStyle = "DarkOliveGreen"
                relva.stroke();
            }
        }
    }
}

function circulo(x,y,raio,veloc)
{   
    this.x = x;
    this.y = y;
    this.raio = raio;
    this.veloc = veloc;

    var c = document
        .getElementById("canvas")
        .getContext("2d");
    
    this.draw = function()
    {
    c.beginPath();
    c.arc(this.x,this.y,this.raio,0,Math.PI * 2, false);
    c.strokeStyle = "GhostWhite";
    c.fillStyle = "GhostWhite";
    c.fill();
    c.stroke();
    }

    this.move = function()
    {
        if(this.x > 770)
        {
            this.x = -60;
        }
        this.x +=this.veloc;
        this.draw();
    }
}

function crianc(x,y,veloc)
{
    this.x = x;
    this.y = y;
    this.veloc = veloc;

    var tronco = document
        .getElementById("canvas")
        .getContext("2d");
    
    var cabeca = document
        .getElementById("canvas")
        .getContext("2d");

    var bone = document
        .getElementById("canvas")
        .getContext("2d");

    var bracoDi = document
        .getElementById("canvas")
        .getContext("2d");

    var bracoEs = document
        .getElementById("canvas")
        .getContext("2d");

    var ombro = document
        .getElementById("canvas")
        .getContext("2d");

    var mao = document
        .getElementById("canvas")
        .getContext("2d");

    var olho = document
        .getElementById("canvas")
        .getContext("2d");

    var pernaDi = document
        .getElementById("canvas")
        .getContext("2d");

    var pernaEs = document
        .getElementById("canvas")
        .getContext("2d");

    var cintura = document
        .getElementById("canvas")
        .getContext("2d");

    var nariz = document
        .getElementById("canvas")
        .getContext("2d");

    var pe = document
        .getElementById("canvas")
        .getContext("2d");

    this.draw = function()
    {
        pe.beginPath();
        pe.lineWidth = 1;
        pe.ellipse(this.x+5,this.y+105,5,12,Math.PI/2,0, Math.PI*2);
        pe.strokeStyle = "saddlebrown";
        pe.fillStyle = "saddlebrown";
        pe.fill();
        pe.stroke();

        pernaEs.beginPath();
        pernaEs.moveTo(this.x+9,this.y+65);
        pernaEs.lineWidth = 14;
        pernaEs.lineTo(this.x,this.y+103);
        pernaEs.strokeStyle = "MidnightBlue";
        pernaEs.stroke();

        tronco.fillStyle = "darkred";
        tronco.fillRect(this.x,this.y,20,70);

        mao.beginPath();
        mao.lineWidth = 1;
        mao.arc(this.x+50,this.y+25,5,0,Math.PI * 2, false);
        mao.strokeStyle = "Cornsilk";
        mao.fillStyle = "Cornsilk";
        mao.fill();

        bracoEs.beginPath();
        bracoEs.moveTo(this.x+5,this.y+20);
        bracoEs.lineWidth = 10;
        bracoEs.lineTo(this.x+50,this.y+25);
        bracoEs.strokeStyle = "Maroon";
        bracoEs.stroke();

        nariz.beginPath();
        nariz.linewidth = 1;
        nariz.moveTo(this.x+24,this.y+5)
        nariz.lineTo(this.x+24.5,this.y+6);
        nariz.lineTo(this.x+10,this.y+15);
        nariz.strokeStyle = "Cornsilk";
        nariz.fillStyle = "Cornsilk";
        nariz.fill();
        nariz.stroke();

        cabeca.beginPath();
        cabeca.lineWidth = 1;
        cabeca.arc(this.x+10,this.y,18,0,Math.PI * 2, false);
        cabeca.strokeStyle = "Cornsilk";
        cabeca.fillStyle = "Cornsilk";
        cabeca.fill();
        cabeca.stroke();

        bone.beginPath();
        bone.lineWidth = 1;
        bone.arc(this.x+10,this.y,18,Math.PI-0.3,-0.3, false);
        bone.strokeStyle = "DodgerBlue";
        bone.fillStyle = "DodgerBlue";
        bone.fill();
        bone.stroke();
        bone.moveTo(this.x,this.y-5);
        bone.lineWidth = 7;
        bone.lineTo(this.x+50,this.y-13)
        bone.stroke();

        mao.beginPath();
        mao.lineWidth = 1;
        mao.arc(this.x+50,this.y+42,5,0,Math.PI * 2, false);
        mao.strokeStyle = "Cornsilk";
        mao.fillStyle = "Cornsilk";
        mao.fill();

        bracoDi.beginPath();
        bracoDi.moveTo(this.x+5,this.y+20);
        bracoDi.lineWidth = 10;
        bracoDi.lineTo(this.x+50,this.y+42);
        bracoDi.strokeStyle = "darkred";
        bracoDi.stroke();

        ombro.beginPath();
        ombro.lineWidth = 1;
        ombro.arc(this.x+12,this.y+25,13,Math.PI+0.5,0, false);
        ombro.strokeStyle = "darkred";
        ombro.fillStyle = "darkred";
        ombro.fill();
        ombro.stroke();

        cintura.fillStyle = "navy";
        cintura.fillRect(this.x,this.y+60,20,10);

        pe.beginPath();
        pe.lineWidth = 1;
        pe.ellipse(this.x+35,this.y+99,5,12,Math.PI/3, 0, Math.PI*2);
        pe.strokeStyle = "saddlebrown";
        pe.fillStyle = "saddlebrown";
        pe.fill();
        pe.stroke();

        pernaDi.beginPath();
        pernaDi.moveTo(this.x+13,this.y+65);
        pernaDi.lineWidth = 13;
        pernaDi.lineTo(this.x+30,this.y+100);
        pernaDi.strokeStyle = "Navy";
        pernaDi.stroke();

        olho.beginPath();
        olho.lineWidth = 1;
        olho.arc(this.x+22,this.y+5,3,0,Math.PI * 2, false);
        olho.strokeStyle = "white";
        olho.fillStyle = "SaddleBrown";
        olho.fill();
        olho.stroke();
        
    }

    this.move = function()
    {
        if(this.x > 770)
        {
            this.x = -60;
        }
        this.x +=this.veloc;
        this.draw();
    }
}

function folha(x,y,raio,veloc)
{   
    this.x = x;
    this.y = y;
    this.raio = raio;
    this.veloc = veloc;

    var c = document
        .getElementById("canvas")
        .getContext("2d");
    
    this.draw = function()
    {
    c.beginPath();
    c.lineWidth = 1;
    c.ellipse(this.x,this.y,this.raio,16,Math.PI/3, 0, Math.PI*2);
    c.strokeStyle = "DarkOliveGreen";
    c.fillStyle = "DarkOliveGreen";
    c.fill();
    c.stroke();
    c.beginPath();
    c.lineWidth = 2.2;
    c.moveTo(this.x,this.y);
    c.lineTo(this.x+28,this.y-10);
    c.strokeStyle = "DarkOliveGreen";
    c.fillStyle = "DarkOliveGreen";
    c.fill();
    c.stroke();
    }

    this.move = function()
    {
        if(this.x < 0)
        {
            this.x = 790;
            this.y = Math.random()*400;
        }
        this.x -=this.veloc;
        if(this.y < 300)
        {
            this.draw();
        }
    }
}

function darCor()
{
    var gradient = document
    .getElementById("canvas")
    .getContext("2d")
    .createLinearGradient(0, 0, 450, 750);
    gradient.addColorStop(0, "rgba(235, 200, 100, 0.3)");
    gradient.addColorStop(1, "rgba(200, 90, 30, 0.3)");

    var fund = document
        .getElementById("canvas")
        .getContext("2d");

    fund.fillStyle = gradient;
    fund.fillRect(0,0,750,450);
    //edificio.globalAlpha = 0.01;

}

function main()
{
    
    let raioDabola = 15;
    let velocidade = 3;
    var bola = new circulo(-200,380,raioDabola,velocidade);
    var crian = new crianc(-300,300,velocidade);
    var folha1 = new folha(1000,250, 5,13);
    var folha2 = new folha(1900,30, 5,13);
    var folha3 = new folha(800,80, 5,13);
    function animate(){
        requestAnimationFrame(animate);
        fundo();
        edificio8(0);
        edificio8(360);
        edificio4();
        edificio2();
        edificio9(0);
        edificio3();
        edificio6(0);
        edificio5(0,0,0,"LightSlateGrey","LightSteelBlue");
        edificio5(475,-45,+9,"Silver","Snow");
        edificio7();
        edificio9(535);
        edificio6(275);
        primeiroplano();
        folha1.move();
        folha2.move();
        folha3.move();
        bola.move();
        crian.move();
        darCor();
    }
    animate();
}