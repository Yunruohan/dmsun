<template>
    <div id="Keras">
        <h1>Keras</h1>
        <h2>简介</h2>
        <h3>1、主要思想：</h3>
        <span>在一副图像中，局部目标的表象和形状能够被梯度或边缘的方向密度分布很好地描述。其本质为：梯度的统计信息，而梯度主要存在于边缘的地方。
        Hog特征结合SVM分类器已经被广泛应用于图像识别中，尤其在行人检测中获得了极大的成功。</span>
        <h3>2、实现方法：</h3>
        <span>首先将图像分成小的连通区域，这些连通区域被叫做细胞单元。然后采集细胞单元中各像素点的梯度的或边缘的方向直方图。最后把这些直方图组合起来，就可以构成特征描述符。</span>
        <h3>3、性能提高：</h3>
        <span>将这些局部直方图在图像的更大的范围内（叫做区间）进行对比度归一化，可以提高该算法的性能，所采用的方法是：先计算各直方图在这个区间中的密度，然后根据这个密度对区间中的各个细胞单元做归一化。通过这个归一化后，能对光照变化和阴影获得更好的效果。</span>
    </div>
</template>
<script>
</script>
<style lang="scss">
#Keras {
    padding-left: 40px;
    h1 {
        padding: 50px 0 25px;
        font-size: 28px;
        line-height: 28px;
        color: #000;
        border-bottom: 1px solid #e8e8e8;
    }
    h2 {
        padding: 34px 0 14px;
        font-size: 24px;
        line-height: 30px;
        color: #000;
    }
}
</style>

